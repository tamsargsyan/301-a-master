import { useWindowSize } from "../../hooks/useWindowSize";
import { ProjectTypes, projectsData } from "../OurProject/projectsData";
import Button from "../../components/Button";
import ARROW from "../../assets/arrow.svg";
import FLAG from "../../assets/flag.svg";
import PATTERN from "../../assets/projectAuthor/pattern.svg";
import PDF from "../../assets/projectAuthor/pdf.svg";
import BUDGET from "../../assets/projectAuthor/budget.svg";
import COLLECTED from "../../assets/projectAuthor/collected.svg";
import REMAINING from "../../assets/projectAuthor/remaining.svg";
import HEART from "../../assets/projectAuthor/heart.svg";
import ARROW_MEMBER_LEFT from "../../assets/arrow-left-team-member.svg";
import ARROW_MEMBER_RIGHT from "../../assets/info/arrow-right-team-member.svg";
import "./index.css";
import RevolveText from "../../components/Revolve";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "../../actions/apiActions";
import { RootState } from "../../store/configureStore";
import AUTHOR_1 from "../../assets/projectAuthor/1.svg";
import PROJECT_1 from "../../assets/projectAuthor/project-1.png";
import FULL_PROJECT_1 from "../../assets/projectAuthor/project-full-1.svg";
import ROSGOSTRAKH from "../../assets/info/rostgostrakh.svg";
import BETCONSTRUCT from "../../assets/info/betconstruct.png";
import DIGITAIN from "../../assets/info/digitain.png";
import ROSE_CIRCLE from "../../assets/projectAuthor/rose-circle.png";
import GREEN_CIRCLE from "../../assets/projectAuthor/green-circle.png";
import ORANGE_CIRCLE from "../../assets/projectAuthor/orange-circle.png";
import YELLOW_CIRCLE from "../../assets/projectAuthor/yellow-circle.png";
import BLUE_CIRCLE from "../../assets/projectAuthor/blue-circle.png";
import PURPLE_CIRCLE from "../../assets/projectAuthor/purple-circle.png";
import PERSON_1 from "../../assets/projectAuthor/person-1.svg";
import PERSON_2 from "../../assets/projectAuthor/person-2.png";
import { useNavigate, useParams } from "react-router";
import Footer from "../Footer";
import Background from "../../components/Background";
import DropDown from "../../components/Dropdown";
import PATTERN_SIDE from "../../assets/patterns/side-2.svg";
import ICON from "../../assets/info/4.svg";
import PATTERN_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import Header from "../../components/Header";
import { Spin } from "antd";

interface Props {
  viewedProject?: ProjectTypes | undefined;
  setIsView?: (arg: boolean) => void;
}

const FullProjectInfo: React.FC<Props> = ({ viewedProject, setIsView }) => {
  const arr = [
    {
      id: 1,
      day: "01",
      month: "Apr",
      color: "#DD264E",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 2,
      day: "02",
      month: "May",
      color: "#189387",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 3,
      day: "03",
      month: "Jun",
      color: "#C5D92D",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 4,
      day: "01",
      month: "Apr",
      color: "#2DD9B0",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 5,
      day: "02",
      month: "May",
      color: "#D9562D",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 5,
      day: "03",
      month: "Jun",
      color: "#D92DD2",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 6,
      day: "01",
      month: "Apr",
      color: "#EB407A",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 7,
      day: "02",
      month: "May",
      color: "#87B63B",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 8,
      day: "03",
      month: "Jun",
      color: "#7BA8FF",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 9,
      day: "01",
      month: "Apr",
      color: "#EB4040",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 10,
      day: "02",
      month: "May",
      color: "#CFA81F",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 11,
      day: "03",
      month: "Jun",
      color: "#7BD7FF",
      desc: "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh",
    },
  ];

  const windowSize = useWindowSize();
  const isThereAnotherMember = projectsData[0].projects[0]?.workTeam.find(
    (member) => member.img.length > 1
  );
  const [nextMember, setNextMember] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const donationsRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    //@ts-ignore
    // dispatch(fetching("project"));
    //@ts-ignore
    dispatch(fetching(`project-details/${id}`));
  }, [dispatch]);

  const { lang } = useParams();

  const { data, loading } = useSelector(
    (state: RootState) => state.projectDetails
  );
  const { partners, project, projectCategory, projectStatus } = data;
  const { ourProject } = useSelector(
    (state: RootState) => state.projectData.data
  );
  useEffect(() => {
    if (project) {
      const observer = new IntersectionObserver((entries) => {
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

  if (loading)
    return (
      <div className="loadingContainer">
        <Spin size="large" />
      </div>
    );

  return (
    <Background
      pattern1={windowSize.width < 800 ? PATTERN_MOBILE : PATTERN_SIDE}
      sidePatter2Style={{ display: "none" }}
      style={{ flexDirection: "column", padding: "0" }}
    >
      {project && (
        <>
          {/* <div className="filteringWrapper">
            <Header
              title={ourProject[0][`title_${lang || "ru"}`]}
              description={ourProject[0][`description_${lang || "ru"}`]}
              icon={ICON}
            />
            {windowSize.width > 800 ? (
              <div className="filteringBtnsWrapper">
                {projectCategory.map((category: any, i: number) => (
                  <button
                    disabled={true}
                    key={i}
                    // className={`${
                    // activeProjects.i === i && "activeProjectBtn"
                    // }`}
                    // onClick={() => handleClick(i, category.name_am)}
                  >
                    {category[`name_${lang || "ru"}`]}
                  </button>
                ))}
              </div>
            ) : (
              <DropDown
                items={projectsData}
                setItem={() => {}}
                type="i"
                text="All"
                style={{ marginBottom: "20px" }}
              />
            )}
            {windowSize.width > 800 ? (
              <div className="typedBtnsWrapper">
                {projectStatus.map((status: any) => (
                  <Fragment key={status.id}>
                    <Button
                      text={status[`name_${lang || "ru"}`]}
                      link={false}
                      // active={typedProject === btn.type}
                      to={""}
                      style={{
                        padding: "12px 22px",
                        border: "none",
                      }}
                      // onClick={() => setTypedProject(btn.type)}
                      disabled={true}
                      className="typedBtn"
                    />
                  </Fragment>
                ))}
              </div>
            ) : (
              <DropDown
                items={[]}
                setItem={() => {}}
                type="type"
                text={"All"}
                style={{ width: "50vw", marginRight: "auto" }}
              />
            )}
          </div> */}
          <div className="fullProjectContainer">
            <div className="fullProjectInner">
              <div className="fullProjectBg">
                <div className="overlay"></div>
                <button className="backBtn" onClick={() => navigate(-1)}>
                  <img src={ARROW} alt="Back Button" />
                </button>
                <img
                  src={FULL_PROJECT_1}
                  alt="Project Background"
                  className="bgImg"
                />
                <h1 className="fullProjectBg_title">
                  {project[`project_name_${lang || "ru"}`]}
                </h1>
              </div>
              <div className="fullProject_inner">
                <div className="fullProject_titleInner">
                  <div className="titlePart">
                    <h2>{project[`project_name_${lang || "ru"}`]}</h2>
                    <div className="flag">
                      <img src={FLAG} alt="Flag" />
                      <span>{15}</span>
                    </div>
                  </div>
                  <div className="ourProject__author">
                    <img src={AUTHOR_1} alt="Author" />
                    <span>Peter Nemoy</span>
                  </div>
                </div>
                <div className="fullProject_problemInner">
                  <div className="problem_header">
                    <div className="problem_heading">
                      <img src={PATTERN} alt="Pattern" />
                      <h2>Problem</h2>
                    </div>
                    {windowSize.width > 600 && (
                      <button className="download_pdf">
                        <span>download presentation pdf</span>
                        <img src={PDF} alt="Pdf" />
                      </button>
                    )}
                  </div>
                  <div
                    className="problem_inner"
                    dangerouslySetInnerHTML={{
                      __html: project[`problem_description_${lang || "ru"}`],
                    }}
                  />
                  {windowSize.width < 600 && (
                    <button className="download_pdf">
                      <span>dawload presentation pdf</span>
                      <img src={PDF} alt="Pdf" />
                    </button>
                  )}
                </div>
                <div className="roadMapContainer">
                  <div className="roadMap_heading problem_heading">
                    <img src={PATTERN} alt="Pattern" />
                    <h2>Road Map</h2>
                  </div>
                  <div className="roadMap_inner _inner">
                    <div className="fullProject_slider">
                      <div className="chartContainer">
                        <div className="chart_line"></div>
                        {arr.map((info, i) => {
                          return (
                            <div className="chart" key={i}>
                              <div className="chart_info">
                                <h1>{info.day}</h1>
                                <p>{info.desc}</p>
                              </div>
                              <div className="chart_month">
                                <div
                                  className="month_circle"
                                  style={{ backgroundColor: info.color }}
                                ></div>
                                <div className="month">{info.month}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="budgetContainer">
                      <div className="budget">
                        <img src={BUDGET} alt="Budget" />
                        <span>Budget</span>
                        <h2>{project.budget_price}$</h2>
                      </div>
                      <div className="collected">
                        <img src={COLLECTED} alt="Collected" />
                        <span>Collected</span>
                        <h2>{project.collected_price}$</h2>
                      </div>
                      <div className="remaining">
                        <img src={REMAINING} alt="Remaining" />
                        <span>Collected</span>
                        <h2>{project.remaining_price}$</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="workTeamContainer">
                  <div className="roadMap_heading problem_heading">
                    <img src={PATTERN} alt="Pattern" />
                    <h2>Work Team</h2>
                  </div>
                  <div className="teamMembers _inner">
                    <div className="firstTeam">
                      {projectsData[0].projects[0].workTeam
                        ?.slice(0, 3)
                        .map((team, i) => (
                          <div className="memberWrapper" key={team.id}>
                            <div className="memberWrapper_withoutName">
                              {isThereAnotherMember?.id === team.id && (
                                <button
                                  className="arrowBtn_teamMember"
                                  onClick={() =>
                                    nextMember > 0 &&
                                    setNextMember((prev) => prev - 1)
                                  }
                                >
                                  <img src={ARROW_MEMBER_LEFT} alt="Arrow" />
                                </button>
                              )}
                              <div className="member">
                                <img
                                  src={team.bgImg}
                                  alt="Team Member"
                                  className="teamMember_bgImg"
                                />
                                <img
                                  src={team.img[nextMember] || team.img[0]}
                                  alt="Team Member"
                                  className="teamMember_img"
                                />
                                <RevolveText
                                  span={50}
                                  north={0}
                                  spiral={false}
                                  size={200}
                                  text={team.position}
                                />
                              </div>
                              {isThereAnotherMember?.id === team.id && (
                                <button
                                  className="arrowBtn_teamMember"
                                  onClick={() =>
                                    nextMember < team.img.length &&
                                    setNextMember((prev) => prev + 1)
                                  }
                                >
                                  <img src={ARROW_MEMBER_RIGHT} alt="Arrow" />
                                </button>
                              )}
                            </div>
                            <p className="member_name">{team.name}</p>
                          </div>
                        ))}
                    </div>
                    <div className="secondTeam">
                      {projectsData[0].projects[0].workTeam
                        ?.slice(3)
                        .map((team) => (
                          <div className="memberWrapper" key={team.id}>
                            <div className="memberWrapper_withoutName">
                              {isThereAnotherMember?.id === team.id && (
                                <button className="arrowBtn_teamMember">
                                  <img src={ARROW_MEMBER_LEFT} alt="Arrow" />
                                </button>
                              )}
                              <div className="member">
                                <img
                                  src={team.bgImg}
                                  alt="Team Member"
                                  className="teamMember_bgImg"
                                />
                                <img
                                  src={team.img[nextMember] || team.img[0]}
                                  alt="Team Member"
                                  className="teamMember_img"
                                />
                                <RevolveText
                                  span={50}
                                  north={0}
                                  spiral={false}
                                  size={200}
                                  text={team.position}
                                />
                              </div>
                              {isThereAnotherMember?.id === team.id && (
                                <button className="arrowBtn_teamMember">
                                  <img src={ARROW_MEMBER_RIGHT} alt="Arrow" />
                                </button>
                              )}
                            </div>
                            <p className="member_name">{team.name}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="partnersContainer">
                  <div className="roadMap_heading problem_heading">
                    <img src={PATTERN} alt="Pattern" />
                    <h2>Partners</h2>
                  </div>
                  <div className="partners _inner">
                    <div className="innerPartners">
                      {partners.map((partner: any) => (
                        <div className="partner" key={partner.id}>
                          <img src={ROSGOSTRAKH} alt={partner.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="_inner dontaionBtns_wrapper" ref={donationsRef}>
                  <div
                    className={`${
                      !isVisible && "dontaionBtnsFixed"
                    } dontaionBtns`}
                    style={{ position: isVisible ? "static" : "fixed" }}
                  >
                    <Button
                      text="add to interesting"
                      link={false}
                      to=""
                      icon={HEART}
                      style={{
                        color: "#717883",
                        border: "1px solid #000",
                        gap: "10px",
                        padding: "12px 35px",
                        fontWeight: 600,
                        width: "250px"
                      }}
                      className="donationBtn"
                    />
                    <Button
                      text="Donate"
                      link={false}
                      to={""}
                      style={{
                        width: "250px",
                        color: "#fff",
                        background: "#DD264E",
                        boxShadow: "0px 26px 40px 0px rgba(191, 9, 48, 0.15)",
                        padding: "12px 35px",
                      }}
                      className="donationBtn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer followUs={undefined} />
        </>
      )}
    </Background>
  );
};

export default FullProjectInfo;
