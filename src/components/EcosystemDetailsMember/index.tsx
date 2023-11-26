import ARROW from "../../assets/ecosystemDetails/arrow-red.svg";
import "./index.css";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import SingleProjectBox from "../SingleProjectBox";
import { storageBase } from "../../utils/storage";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { useTranslation } from "react-i18next";
import { removeHtmlTags } from "../../globalFunctions/removeHtmlTags";

interface EcoSystemDetailsMemberProps {
  expertProject?: {
    name: string;
    color: string;
    colorWeak: string;
    icon: string;
    elipse: string;
  };
  project: any;
}

const EcoSystemDetailsMember: React.FC<EcoSystemDetailsMemberProps> = ({
  expertProject,
  project,
}) => {
  const windowSize = useWindowSize();
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    carousel.current &&
      windowSize.width &&
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [windowSize.width]);

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);
  const { t } = useTranslation();
  const { ecosystem } = useParams();

  return (
    <>
      {project &&
        (ecosystem === "partners" ? (
          <div className='ecosystemDetails_partners_item' key={project.id}>
            <img src={`${storageBase}/${project.image}`} alt='Partner' />
          </div>
        ) : (
          <div className='ecoSystemDetailsMember'>
            <div className='memberHeader'>
              <div
                className='memberImg_container'
                style={{ backgroundImage: `url(${expertProject?.elipse})` }}>
                <img
                  src={`${storageBase}/${
                    ecosystem === "club301" || ecosystem === "ambassador"
                      ? project.image
                      : project.user.image
                  }`}
                  alt='Member'
                  className='memberImg'
                />
              </div>
              <span>
                {ecosystem === "club301" || ecosystem === "ambassador"
                  ? project.name
                  : project.user[`name_${lang}`]}{" "}
                {ecosystem === "club301" || ecosystem === "ambassador"
                  ? project.last_name
                  : project.user[`last_name_${lang}`]}
              </span>
            </div>
            <div className='memberContent'>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    ecosystem === "club301" || ecosystem === "ambassador"
                      ? project[`about_me_${lang}`]
                      : project.user?.role !== "sages"
                      ? project.user[`description_${lang}`]
                      : project.user[`about_me_${lang}`],
                }}
              />
              {windowSize.width > 600 && project.all_project?.length ? (
                <div className='memberProjects_separatedPart'></div>
              ) : null}
              {project.all_project?.length ? (
                <div className='memberProjects'>
                  <div className='memberProjectHeader'>
                    <p>Project</p>
                    {windowSize.width > 600 && (
                      <div className='btns'>
                        <button
                          onClick={handleBack}
                          style={{
                            background:
                              currentIndex === 0
                                ? expertProject?.colorWeak
                                : expertProject?.color,
                          }}>
                          <img src={ARROW} alt='Arrow' />
                        </button>
                        <button
                          onClick={handleNext}
                          style={{
                            background:
                              currentIndex === 1
                                ? expertProject?.colorWeak
                                : expertProject?.color,
                          }}>
                          <img src={ARROW} alt='Arrow' />
                        </button>
                      </div>
                    )}
                  </div>
                  {windowSize.width > 600 ? (
                    <motion.div ref={carousel} className='carousel'>
                      <motion.div
                        className='innerCarousel'
                        initial={{ x: 0 }}
                        animate={{
                          x: -width * currentIndex,
                        }}>
                        {project?.all_project?.map((p: any, i: number) => (
                          <Fragment key={i}>
                            <SingleProjectBox
                              title={p?.project[`project_name_${lang}`]}
                              // description={removeHtmlTags(
                              //   p?.project[`problem_description_${lang}`]
                              // )
                              //   .split(" ")
                              //   .slice(0, 2)
                              //   .join(" ")}
                              flag={p?.map_count}
                              author={`${p[1]?.user?.name} ${p[1]?.user?.last_name}`}
                              authorImg={`${storageBase}/${p?.user?.image}`}
                              projectImg={`${storageBase}/${p?.project?.image}`}
                              className='personal_project ecosystemDetails_project'
                            />
                          </Fragment>
                        ))}
                      </motion.div>
                    </motion.div>
                  ) : (
                    <div className='ecosystemDetails_projects'>
                      {project?.all_project?.map((p: any, i: number) => (
                        <Fragment key={i}>
                          <SingleProjectBox
                            title={p?.project[`project_name_${lang}`]}
                            // description={removeHtmlTags(
                            //   p?.project[`problem_description_${lang}`]
                            // )
                            //   .split(" ")
                            //   .slice(0, 2)
                            //   .join(" ")}
                            flag={p?.map_count}
                            author={`${p[1]?.user?.name} ${p[1]?.user?.last_name}`}
                            authorImg={`${storageBase}/${p?.user?.image}`}
                            projectImg={`${storageBase}/${p?.project?.image}`}
                            className='personal_project ecosystemDetails_project'
                          />
                        </Fragment>
                      ))}
                    </div>
                  )}
                  <NavLink
                    to='/projects'
                    className='otherProjects_link'
                    style={{ color: expertProject?.color }}>
                    {t("btns.other-projects")}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='9'
                      height='16'
                      viewBox='0 0 9 16'
                      fill='none'>
                      <path
                        d='M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34314 0.928934C1.95262 0.53841 1.31945 0.53841 0.928928 0.928935C0.538404 1.31946 0.538405 1.95262 0.928929 2.34315L6.58579 8L0.928935 13.6569C0.538411 14.0474 0.538411 14.6805 0.928936 15.0711C1.31946 15.4616 1.95263 15.4616 2.34315 15.0711L8.70711 8.70711ZM6 9L8 9L8 7L6 7L6 9Z'
                        fill={expertProject?.color}
                      />
                    </svg>
                  </NavLink>
                </div>
              ) : null}
            </div>
          </div>
        ))}
    </>
  );
};

export default EcoSystemDetailsMember;
