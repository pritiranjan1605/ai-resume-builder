import React,{useContext, useState} from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnNumberedList, BtnRedo, BtnStyles, BtnUnderline, BtnUndo, Editor, EditorProvider,BtnClearFormatting ,HtmlButton, Toolbar } from 'react-simple-wysiwyg'
import { Button } from '@/components/ui/button'
import { BrainCircuitIcon, LoaderIcon } from 'lucide-react'
import { Resumeinfocontext } from '@/context/Resumeinfocontact'
import { toast } from 'sonner'
import { AIchatsession } from './../../../../service/Aimodels'




const PROMPT="position title: {positiontitle} , Depends on position title give me 5-7 bullet points for my expirenxe inresume . give me result in html format"

const Richtexteditor = ({onrichtexteditorchange,index}) => {


    const [value,setvalue] = useState('<ul><li>developed and mentained different softwaredevelopement models</li><li>developed and mentained different softwaredevelopement models</li><li>developed and mentained different softwaredevelopement models</li><li>developed and mentained different softwaredevelopement models</li></ul>')
    const {resumeinfo,setresumeinfo} = useContext(Resumeinfocontext)
    const [loading,setloading]= useState(false)

    const generatesummeryfromai=async()=>{
        setloading(true)
        if (!resumeinfo.experience[index].title) {
            toast('please add position title')
            return;
        }
        const prompt =PROMPT.replace('{positiontitle}',resumeinfo.experience[index].title)
        const result = await AIchatsession.sendMessage(prompt);

        console.log(result.response.text())
        const resp=result.response.text()
        setvalue(resp.replace('[','').replace(']',''))
        setloading(false)
    }
     
  return (
    <div>
                <div className="flex justify-between items-end mb-4">
          <label htmlFor="">Generate Summary</label>
          <Button  type="button" onClick={generatesummeryfromai}
            className="border-primary gap-2 text-primary "
            size="sm"
            variant="outline"
          >{loading?<LoaderIcon className='animate-spin'/>:<>
          <BrainCircuitIcon/>
          Generate From AI
          </>}
          </Button>
        </div>
        <EditorProvider>

            <Editor className='min-h-[240px]' value={value} onChange={(e)=>{
setvalue(e.target.value) 
onrichtexteditorchange(e)
            }}>
                <Toolbar>
                <BtnBold/>
                <BtnItalic/>
                <BtnUnderline/>
                <BtnBulletList/>
                <BtnNumberedList/>
                <BtnUndo/>
                <BtnRedo/>
                <BtnStyles/>
                <BtnClearFormatting/>
                
                </Toolbar>


            </Editor>
        </EditorProvider>
      
    </div>
  )
}

export default Richtexteditor
