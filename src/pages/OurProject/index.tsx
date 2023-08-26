import { Fragment, useEffect, useState } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import PATTERN from "../../assets/patterns/side-2.svg";
import PATTERN_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import ICON from "../../assets/info/4.svg";
import Project from "../../components/Project";
import { ProjectTypes, projectsData, typeBtn } from "./projectsData";
import { Spin } from "antd";
import Button from "../../components/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import DropDown from "../../components/Dropdown";
import "./index.css";
import { useLocation, useNavigate, useParams } from "react-router";
import Footer from "../Footer";
import ARROW_NEXT from "../../assets/arrow-next.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProjects } from "../../actions/apiActions";
import { RootState } from "../../store/configureStore";
import AUTHOR_1 from "../../assets/projectAuthor/1.svg";
// import ROSGOSTRAKH from "../../assets/info/rostgostrakh.svg";
import PROJECT_1 from "../../assets/projectAuthor/project-1.png";

const OurProjects = () => {
  const windowSize = useWindowSize();
  const [activeProjects, setActiveProjects] = useState({
    i: 0,
    filteringName: "Project Ideas we offer",
  });
  const [typedProject, setTypedProject] = useState("all");
  const [filteredData, setFilteredData] = useState(
    projectsData[activeProjects.i]
  );

  const handleClick = (i: number, filteringName: string) => {
    setActiveProjects((prev) => ({
      ...prev,
      i,
      filteringName,
    }));
  };
  useEffect(() => {
    if (typedProject === "all") {
      setFilteredData(projectsData[activeProjects.i]);
    } else {
      const filteredProjects = projectsData[activeProjects.i].projects?.filter(
        (category) => category.type === typedProject
      );
      setFilteredData({
        ...projectsData[activeProjects.i],
        projects: filteredProjects,
      });
    }
  }, [typedProject, activeProjects]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredData.projects?.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages =
    filteredData.projects &&
    new Array(Math.ceil(filteredData.projects?.length / projectsPerPage)).fill(
      0
    );
  const heartit = (id: number) => {
    setFilteredData((prevData) => {
      const updatedProjects = prevData.projects?.map((project) =>
        project.id === id ? { ...project, isSaved: !project.isSaved } : project
      );
      return { ...prevData, projects: updatedProjects };
    });
  };
  const [isView, setIsView] = useState(false);
  useEffect(() => {
    const handlePopstate = () => {
      setIsView(false);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
  const [viewedProject, setViewedProject] = useState<
    ProjectTypes | undefined
  >();
  const view = (id: number) => {
    const viewedProject = currentProjects?.find((project) => project.id === id);
    //@ts-ignore
    setViewedProject(viewedProject);
  };
  // const navigate = useNavigate();
  // useEffect(() => {
  //   !isView && navigate("/projects");
  // }, [isView, navigate]);

  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchingProjects("project"));
  }, [dispatch]);

  const lang = useSelector((state: RootState) => state.languageDitactor.lang);

  const { data, loading } = useSelector(
    (state: RootState) => state.projectData
  );
  const { ourProject, projectCategory, projectStatus, projects } = data;

  if (loading)
    return (
      <div className="loadingContainer">
        <Spin size="large" />
      </div>
    );

  return (
    <Background
      pattern1={windowSize.width < 800 ? PATTERN_MOBILE : PATTERN}
      sidePatter2Style={{ display: "none" }}
      style={{ flexDirection: "column", padding: "0" }}
    >
      {ourProject && projects && (
        <>
          <div className="filteringWrapper">
            <Header
              title={ourProject[0][`title_${lang || "ru"}`]}
              description={ourProject[0][`description_${lang || "ru"}`]}
              icon={ICON}
            />
            {windowSize.width > 800 ? (
              <div className="filteringBtnsWrapper">
                {projectCategory.map((category: any, i: number) => (
                  <button
                    disabled={isView}
                    key={i}
                    className={`${
                      activeProjects.i === i && "activeProjectBtn"
                    }`}
                    onClick={() => handleClick(i, category.name_am)}
                  >
                    {category[`name_${lang || "ru"}`]}
                  </button>
                ))}
              </div>
            ) : (
              <DropDown
                items={projectsData}
                setItem={handleClick}
                type="i"
                text={activeProjects.filteringName}
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
                      disabled={isView}
                      className="typedBtn"
                    />
                  </Fragment>
                ))}
              </div>
            ) : (
              <DropDown
                items={typeBtn}
                setItem={setTypedProject}
                type="type"
                text={typedProject}
                style={{ width: "50vw", marginRight: "auto" }}
              />
            )}
          </div>
          {projects?.length ? (
            projects?.map((project: any) => (
              <Fragment key={project.id}>
                <Project
                  author="Peter Nemoy"
                  authorImg={AUTHOR_1}
                  title={project[`project_name_${lang || "ru"}`]}
                  flag={15}
                  desc={project[`problem_description_${lang || "ru"}`]}
                  projectImg={PROJECT_1}
                  heartit={() => heartit(project.id)}
                  isSaved={false}
                  id={project.id}
                  setIsView={setIsView}
                  view={view}
                />
              </Fragment>
            ))
          ) : (
            <div className="noProject">There is no project</div>
          )}
          {totalPages && totalPages.length > 1 && !!currentProjects?.length && (
            <div className="pagination">
              <Button
                text="Prev"
                link={false}
                to={""}
                icon={ARROW_NEXT}
                onClick={() => setCurrentPage(currentPage - 1)}
                style={{
                  border: "1px solid #000",
                  gap: "10px",
                  fontWeight: "500",
                  opacity: currentPage === 1 ? 0 : 1,
                  cursor: currentPage === 1 ? "unset" : "pointer",
                }}
                className="pagination_backBtn"
              />
              <div className="paginationBtnWrapper">
                {totalPages.map((_, i) => (
                  <button
                    key={i}
                    className={`${
                      currentPage === i + 1 && "paginationBtn_active"
                    } paginationBtn`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <Button
                text="Next"
                link={false}
                to={""}
                icon={ARROW_NEXT}
                onClick={() => setCurrentPage(currentPage + 1)}
                style={{
                  border: "1px solid #000",
                  gap: "10px",
                  fontWeight: "500",
                }}
                disabled={currentPage === totalPages.length}
              />
            </div>
          )}
          <Footer followUs={undefined} />
        </>
      )}
    </Background>
  );
};

export default OurProjects;
