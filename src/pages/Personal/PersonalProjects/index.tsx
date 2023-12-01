import React from "react";
import AUTHOR_1 from "../../../assets/projectAuthor/1.svg";
import PROJECT_1 from "../../../assets/projectAuthor/project-1.png";
import "./index.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import SingleProjectBox from "../../../components/SingleProjectBox";

interface PersonalProjectsProps {
  title: string;
  content?: string;
}

const PerosnalProjects: React.FC<PersonalProjectsProps> = ({
  title,
  content,
}) => {
  const { t } = useTranslation();

  return (
    <div className='personalInfo_wrapper'>
      <Helmet>
        <title>Peter Nemoy | {t(`personal.${title}`)}</title>
      </Helmet>
      <p className='personalInfo_title'>{t(`personal.${title}`)}</p>
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
