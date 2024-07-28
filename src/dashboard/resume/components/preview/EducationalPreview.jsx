import React from "react";

const EducationalPreview = ({ resumeinfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeinfo?.themecolor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: resumeinfo?.themecolor,
        }}
      />

      {resumeinfo?.education.map((education, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeinfo?.themecolor,
            }}
          >
            {education?.universityname}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree} in {education?.major}{" "}
            <span>
              {education?.startdate} - {education?.enddate}
            </span>
          </h2>
          <p className="text-xs my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationalPreview;
