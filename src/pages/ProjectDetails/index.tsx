import { useWindowSize } from "../../hooks/useWindowSize";
import ROSE_CIRCLE from "../../assets/projectAuthor/rose-circle.png";
import GREEN_CIRCLE from "../../assets/projectAuthor/green-circle.png";
import ORANGE_CIRCLE from "../../assets/projectAuthor/orange-circle.png";
import YELLOW_CIRCLE from "../../assets/projectAuthor/yellow-circle.png";
import BLUE_CIRCLE from "../../assets/projectAuthor/blue-circle.png";
import PURPLE_CIRCLE from "../../assets/projectAuthor/purple-circle.png";
import Button from "../../components/Button";
import ARROW from "../../assets/arrow.svg";
import FLAG from "../../assets/flag.svg";
import PATTERN from "../../assets/projectAuthor/pattern.svg";
// import PDF from "../../assets/projectAuthor/pdf.svg";
import HEART from "../../assets/projectAuthor/heart.svg";
import "./index.css";
import RevolveText from "../../components/Revolve";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchingProjectDetails,
  fetchingProjects,
} from "../../actions/apiActions";
import { RootState } from "../../store/configureStore";
import { useNavigate, useParams } from "react-router";
import Footer from "../../components/Footer";
import Background from "../../components/Background";
import DropDown from "../../components/Dropdown";
import PATTERN_SIDE from "../../assets/patterns/side-2.svg";
import ICON from "../../assets/info/4.svg";
import PATTERN_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import Header from "../../components/Header";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { storageBase } from "../../utils/storage";
import { scrollToTop } from "../../globalFunctions/scrollToTop";
import { openDonateSingleProject } from "../../actions/donateAction";
import { Helmet } from "react-helmet";
import "react-slideshow-image/dist/styles.css";
import BUDGET from "../../assets/projectAuthor/budget.svg";
import COLLECTED from "../../assets/projectAuthor/collected.svg";

const ProjectDetails = () => {
  const { t } = useTranslation();
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);
  const colors = [
    "#DD264E",
    "#189387",
    "#C5D92D",
    "#2DD9B0",
    "#D9562D",
    "#D92DD2",
    "#EB407A",
    "#87B63B",
    "#7BA8FF",
    "#EB4040",
    "#CFA81F",
    "#7BD7FF",
  ];

  const windowSize = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const donationsRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchingProjects("project"));
    //@ts-ignore
    dispatch(fetchingProjectDetails(`project-details/${id}`));
  }, [dispatch, id]);

  useEffect(() => {
    scrollToTop();
  }, []);

  const { data, loading } = useSelector(
    (state: RootState) => state.projectDetails
  );
  const { partners, project, projectCategory, projectStatus } = data;
  const { ourProject } = useSelector(
    (state: RootState) => state.projectData.data
  );

  useEffect(() => {
    if (project) {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        const isIntersectingFromBottom = entry.isIntersecting;
        setIsVisible(isIntersectingFromBottom);
      });

      const currentRef = donationsRef.current;

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [project]);
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const scrollAmount = 100;

  const checkRole = (role: string) => {
    if (role === "project_manager") return ROSE_CIRCLE;
    if (role === "donor") return GREEN_CIRCLE;
    if (role === "ambassador") return ORANGE_CIRCLE;
    if (role === "volunteer") return YELLOW_CIRCLE;
    if (role === "experts") return BLUE_CIRCLE;
    if (role === "partners") return PURPLE_CIRCLE;
    return ROSE_CIRCLE;
  };

  if (loading)
    return (
      <div className='loadingContainer'>
        <Spin size='large' />
      </div>
    );

  return (
    <Background
      pattern1={windowSize.width < 800 ? PATTERN_MOBILE : PATTERN_SIDE}
      sidePatter2Style={{ display: "none" }}
      style={{ flexDirection: "column", padding: "0" }}>
      <Helmet>
        <title>Project {id}</title>
      </Helmet>
      {project && ourProject && (
        <>
          <div className='filteringWrapper'>
            <Header
              title={ourProject[0][`title_${lang}`]}
              description={ourProject[0][`description_${lang}`]}
              icon={ICON}
            />
            {windowSize.width > 800 ? (
              <div className='filteringBtnsWrapper'>
                {projectCategory.map((category: any, i: number) => (
                  <button disabled={true} key={i}>
                    {category[`name_${lang}`]}
                  </button>
                ))}
              </div>
            ) : (
              <DropDown
                items={projectCategory}
                onClickItem={() => {}}
                type='projectCategory'
                text={
                  projectCategory.find((category: any) => category.id === 1)[
                    `name_${lang}`
                  ]
                }
                style={{ marginBottom: "20px" }}
                objKey='name'
              />
            )}
            {windowSize.width > 800 ? (
              <div className='typedBtnsWrapper'>
                {projectStatus.map((status: any) => (
                  <Fragment key={status.id}>
                    <Button
                      text={status[`name_${lang}`]}
                      link={false}
                      to={""}
                      style={{
                        padding: "12px 22px",
                        border: "none",
                      }}
                      disabled={true}
                      className='typedBtn'
                    />
                  </Fragment>
                ))}
              </div>
            ) : (
              <DropDown
                items={projectStatus}
                onClickItem={() => {}}
                type='projectStatus'
                text={
                  projectStatus.find((status: any) => status.id === 1)[
                    `name_${lang}`
                  ]
                }
                style={{ marginRight: "auto" }}
                objKey='name'
              />
            )}
          </div>
          <div className='fullProjectContainer'>
            <div className='fullProjectInner'>
              <div className='fullProjectBg'>
                <div className='overlay'></div>
                <button className='backBtn' onClick={() => navigate(-1)}>
                  <img src={ARROW} alt='Back Button' />
                </button>
                <img
                  src={`${storageBase}/${project.banner_image}`}
                  alt='Project Background'
                  className='bgImg'
                />
                <h1 className='fullProjectBg_title'>
                  {project[`project_name_${lang}`]}
                </h1>
              </div>
              <div className='fullProject_inner'>
                <div className='fullProject_titleInner'>
                  <div className='titlePart'>
                    <h2>{project[`project_name_${lang}`]}</h2>
                    <div className='flag'>
                      <img src={FLAG} alt='Flag' />
                      <span>{data.map_count}</span>
                    </div>
                  </div>
                  <div className='ourProject__author'>
                    <img
                      src={`${storageBase}/${data?.user?.image}`}
                      alt='Author'
                      className='ourProject_author_img'
                    />
                    <span>
                      {data?.user?.name} {data?.user?.last_name}
                    </span>
                  </div>
                </div>
                <div className='fullProject_problemInner'>
                  <div className='problem_header'>
                    <div className='problem_heading'>
                      <img src={PATTERN} alt='Pattern' />
                      <h2>{t("project-details.problem")}</h2>
                    </div>
                    {/* {windowSize.width > 600 && (
                      <button className='download_pdf'>
                        <span>{t("btns.download-pdf")}</span>
                        <img src={PDF} alt='Pdf' />
                      </button>
                    )} */}
                  </div>
                  <div
                    className='problem_inner'
                    dangerouslySetInnerHTML={{
                      __html: project[`problem_description_${lang}`],
                    }}
                  />
                  {/* <div
                    className='problem_inner'
                    dangerouslySetInnerHTML={{
                      __html: project[`problem_description_${lang}`],
                    }}
                  /> */}
                  {/* {windowSize.width < 600 && (
                    <button className='download_pdf'>
                      <span>dawload presentation pdf</span>
                      <img src={PDF} alt='Pdf' />
                    </button>
                  )} */}
                </div>
                {project.video && (
                  <div className='videoContainer _inner'>
                    <ReactPlayer
                      url={`${storageBase}/${project.video}`}
                      width='100%'
                      controls
                    />
                  </div>
                )}
                <div className='roadMapContainer'>
                  {project &&
                    project.month_data &&
                    project.month_data[0].month_am !== "-" && (
                      <div className='roadMap_heading problem_heading'>
                        <img src={PATTERN} alt='Pattern' />
                        <h2>
                          {+project.budget_price !== 0
                            ? t("project-details.road-map")
                            : t("project-in-progress")}
                        </h2>
                      </div>
                    )}
                  {project &&
                    (+project.budget_price !== 0 ? (
                      <div className='roadMap_inner _inner'>
                        <div className='fullProject_slider'>
                          {project?.month_data.lnegth && (
                            <div className='chartContainer'>
                              <div className='chart_line'></div>
                              {project?.month_data.map(
                                (month: any, i: number) => {
                                  return (
                                    <div className='chart' key={i}>
                                      <div className='chart_info'>
                                        <h1>{month.month}</h1>
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              month[
                                                `month_description_${lang}`
                                              ],
                                          }}
                                        />
                                      </div>
                                      <div className='chart_month'>
                                        <div
                                          className='month_circle'
                                          style={{
                                            backgroundColor: colors[i],
                                          }}></div>
                                        <div className='month'>
                                          {month[`month_${lang}`]}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          )}
                        </div>
                        <div className='budgetContainer'>
                          <div className='budget'>
                            <img
                              // src={`${storageBase}/${project?.budget_image}`}
                              src={BUDGET}
                              alt='Budget'
                            />
                            <div className='budgetPrice'>
                              <span>{t("budget")}</span>
                              <h2>{project?.budget_price}$</h2>
                            </div>
                          </div>
                          <div className='collected'>
                            <img
                              // src={`${storageBase}/${project.collected_image}`}
                              src={COLLECTED}
                              alt='Collected'
                            />
                            <div className='collectedPrice'>
                              <span>{t("collected")}</span>
                              <h2>{data.collectedPrice}$</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null)}
                </div>
                {data.team[0].length === true && (
                  <div className='workTeamContainer'>
                    <div className='roadMap_heading problem_heading'>
                      <img src={PATTERN} alt='Pattern' />
                      <h2>Work Team</h2>
                    </div>
                    <div className='teamMembers _inner'>
                      <div className='firstTeam'>
                        {data?.team[0]?.map((t: any) => {
                          if (t.role !== "sages")
                            return (
                              <div className='memberWrapper' key={t.id}>
                                <div className='memberWrapper_withoutName'>
                                  <div className='member'>
                                    <img
                                      src={checkRole(t.role)}
                                      alt='Team Member'
                                      className='teamMember_bgImg'
                                    />
                                    <img
                                      src={`${storageBase}/${t.image}`}
                                      alt='Team Member'
                                      className='teamMember_img'
                                    />
                                    <RevolveText
                                      span={50}
                                      north={0}
                                      spiral={false}
                                      size={200}
                                      text={t.role.split("_").join(" ")}
                                    />
                                  </div>
                                </div>
                                <p className='member_name'>
                                  {t.name} {t.last_name}
                                </p>
                              </div>
                            );
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                )}
                <div className='partnersContainer'>
                  <div className='roadMap_heading problem_heading'>
                    <img src={PATTERN} alt='Pattern' />
                    <h2>{t("project-details.partners")}</h2>
                  </div>
                  {/* <div className='projectDetails_slider'>
                    <button
                      className='leftBtn'
                      onClick={() => {
                        const container = sliderRef.current;
                        if (container) {
                          //@ts-ignore
                          container.scrollLeft -= scrollAmount;
                        }
                      }}>
                      <img src={ARROW} alt='Arrow' />
                    </button> */}
                  {/* <div
                      className='ecosystemDetails_partners partners _inner'
                      ref={carousel}>
                      <div className='innerPartners'>
                        {partners.map((partner: any) => (
                          <div
                            className='ecosystemDetails_partners_item'
                            key={partner.id}>
                            <img
                              src={`${storageBase}/${partner.image}`}
                              alt={partner.name}
                            />
                          </div>
                        ))}
                      </div>
                    </div> */}
                  {/* <div
                      className='ecosystemDetails_partners partners _inner'
                      ref={sliderRef}>
                      {partners.map((partner: any) => {
                        return (
                          <div
                            className='ecosystemDetails_partners_item'
                            key={partner.id}>
                            <img
                              src={`${storageBase}/${partner.image}`}
                              alt={partner.name}
                              className='image'
                            /> */}
                  {/* <img
                              className='image'
                              alt='sliderImage'
                              src={`${storageBase}/${partner.image}`}
                            /> */}
                  {/* </div>
                        );
                      })}
                    </div> */}
                  {/* <button
                      className='rightBtn'
                      onClick={() => {
                        const container = sliderRef.current;
                        if (container) {
                          //@ts-ignore
                          container.scrollLeft += scrollAmount;
                        }
                      }}>
                      <img src={ARROW} alt='Arrow' />
                    </button> */}
                  {/* </div> */}
                  <div className='projectDetails_slider_1 partners _inner'>
                    <button
                      className='leftBtn'
                      onClick={() => {
                        const container = sliderRef.current;
                        if (container) {
                          console.log(container);
                          //@ts-ignore
                          container.scrollLeft -= scrollAmount;
                        }
                      }}>
                      <img src={ARROW} alt='Arrow' />
                      {/* <ChevronLeftIcon /> */}
                    </button>
                    <div className='images-container' ref={sliderRef}>
                      {partners.map((partner: any) => {
                        return (
                          <div
                            className='ecosystemDetails_partners_item'
                            key={partner.id}>
                            <img
                              alt='sliderImage'
                              src={`${storageBase}/${partner.image}`}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <button
                      className='rightBtn'
                      onClick={() => {
                        const container = sliderRef.current;
                        if (container) {
                          //@ts-ignore
                          container.scrollLeft += scrollAmount;
                        }
                      }}>
                      <img src={ARROW} alt='Arrow' />
                    </button>
                  </div>
                </div>
                <div className='_inner dontaionBtns_wrapper' ref={donationsRef}>
                  <div
                    className={`${
                      !isVisible && "dontaionBtnsFixed"
                    } dontaionBtns`}
                    style={{ position: isVisible ? "static" : "fixed" }}>
                    <Button
                      text={t("add-to-interesting")}
                      link={false}
                      to=''
                      icon={HEART}
                      style={{
                        color: "#717883",
                        border: "1px solid #000",
                        gap: "10px",
                        padding: "9px 35spx",
                        fontWeight: 600,
                        width: "100%",
                      }}
                      className='donationBtn'
                    />
                    {project && project.budget_price ? (
                      <Button
                        text={t("btns.donate")}
                        link={false}
                        to={""}
                        style={{
                          color: "#fff",
                          background: "#DD264E",
                          boxShadow: "0px 26px 40px 0px rgba(191, 9, 48, 0.15)",
                          padding: "12px 35px",
                          width: !isVisible ? "auto" : "100%",
                        }}
                        onClick={() => {
                          dispatch(
                            openDonateSingleProject(true, "projectDetails")
                          );
                          dispatch(
                            //@ts-ignore
                            fetchingProjectDetails(
                              `project-details/${project.id}`
                            )
                          );
                        }}
                        className='donationBtn'
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer separatedPart={true} />
        </>
      )}
    </Background>
  );
};

export default ProjectDetails;
