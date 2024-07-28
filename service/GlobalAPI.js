import axios from 'axios'
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY
const axiosClient = axios.create({
        baseURL:'http://localhost:1337/api',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${API_KEY}`
        }
})

const Createnewresume=(data)=>axiosClient.post('/user-resumes',data)
const Getuserresume=(useEmail)=>axiosClient.get('/user-resumes?filters[usersemail][$eq]='+useEmail)
const updateresumedetail = (id,data)=>axiosClient.put('/user-resumes/'+id,data)

export default {
    Createnewresume,
    Getuserresume,
    updateresumedetail
}