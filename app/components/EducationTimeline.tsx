import React from "react";

interface Education {
  college: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface EducationTimelineProps {
  education: Education[];
  totalYears: number;
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({
  education,
  totalYears,
}) => {
  return (
    <div className="relative flex justify-center items-center flex-col">
      <div className="bg-gray-900 p-6 rounded-lg lg:w-[50%] w-[90%] ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text text-xl font-semibold">Education</h2>
          <span className="text-white">{totalYears} Years</span>
        </div>
        <ul className="relative border-l border-gray-700">
          {education.map((edu, index) => (
            <li key={index} className="mb-6 ml-4">
              <div className="absolute w-3 h-3 back-gradient rounded-full -left-1.5 border border-gray-900"></div>
              <div className="flex md:flex-row flex-col justify-between items-start md:items-center ">
                <h3 className="text-lg font-semibold text-white">
                  {edu.college}
                </h3>
                <time className="text-sm font-normal md:my-0 my-4 leading-none text-gray-400">
                  {edu.startDate} - {edu.endDate}
                </time>
              </div>
              <p className="text-base font-normal text-gray-400">
                {edu.degree}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationTimeline;
