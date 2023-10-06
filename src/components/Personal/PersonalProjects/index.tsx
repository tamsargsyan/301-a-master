import React from "react";
import SingleProjectBox from "../../SingleProjectBox";
import AUTHOR_1 from "../../../assets/projectAuthor/1.svg";
import PROJECT_1 from "../../../assets/projectAuthor/project-1.png";
import "./index.css";

interface PersonalProjectsProps {
  title: string;
  content?: string;
}

const PerosnalProjects: React.FC<PersonalProjectsProps> = ({
  title,
  content,
}) => {
  return (
    <div className='personalInfo_wrapper'>
      <p className='personalInfo_title'>{title}</p>
      {content && <p className='personalInfo_event_content'>{content}</p>}
      <div className='donationProjects'>
        <SingleProjectBox
          title='301 Land of Wisdom'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          flag={10}
          author='Peter Nemoy'
          authorImg={AUTHOR_1}
          budget='20.000'
          collected={"80"}
          projectImg={PROJECT_1}
          className='personal_project'
          // onClick={handleSingleProject}
        />
      </div>
    </div>
  );
};

export default PerosnalProjects;
