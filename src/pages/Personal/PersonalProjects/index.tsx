import React, { Fragment } from "react";
import AUTHOR_1 from "../../../assets/projectAuthor/1.svg";
import PROJECT_1 from "../../../assets/projectAuthor/project-1.png";
import "./index.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import SingleProjectBox from "../../../components/SingleProjectBox";
import { useEffect } from "react";
import { usePostRequest } from "../../../actions/apiActions";
import { Spin } from "antd";
import cookies from "js-cookie";
import { storageBase } from "../../../utils/storage";
import { removeHtmlTags } from "../../../globalFunctions/removeHtmlTags";

interface PersonalProjectsProps {
  title: string;
  content?: string;
}

const PerosnalProjects: React.FC<PersonalProjectsProps> = ({
  title,
  content,
}) => {
  const { t } = useTranslation();
  const { postRequest, postLoading, response, error } = usePostRequest();
  const lang = cookies.get("i18next");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      postRequest(
        "my-project",
        {},
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      );
    }
  }, []);
  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='personalInfo_wrapper'>
      <Helmet>
        <title>
          {user.name} | {t(`personal.${title}`)}
        </title>
      </Helmet>
      <p className='personalInfo_title'>{t(`personal.${title}`)}</p>
      {content && <p className='personalInfo_event_content'>{content}</p>}
      <div className='donationProjects' style={{ height: "auto" }}>
        {response?.data ? (
          response.data.length > 0 ? (
            response.data.map((p: any, i: number) => (
              <Fragment key={i}>
                <SingleProjectBox
                  title={p[`project_name_${lang}`]}
                  description={removeHtmlTags(p[`description_${lang}`])}
                  flag={
                    p?.payment_type !== "buy" &&
                    p?.payment_type !== "book" &&
                    p?.map_count
                  }
                  author='Peter Nemoy'
                  authorImg={AUTHOR_1}
                  budget={p.budget_price}
                  collected={p.collected_price}
                  projectImg={`${storageBase}/${p.image}`}
                  className='personal_project'
                  // onClick={handleSingleProject}
                />
              </Fragment>
            ))
          ) : (
            t("no-project")
          )
        ) : (
          <Spin size='large' />
        )}
      </div>
    </div>
  );
};

export default PerosnalProjects;
