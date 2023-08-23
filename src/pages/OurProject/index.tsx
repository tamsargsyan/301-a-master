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
import FullProjectInfo from "../FullProjectInfo";
import "./index.css";
import { useNavigate } from "react-router";
import Footer from "../Footer";
import ARROW_NEXT from "../../assets/arrow-next.svg";

const OurProjects = () => {
  const windowSize = useWindowSize();
  const [activeProjects, setActiveProjects] = useState({
    i: 0,
    filteringName: "Project Ideas we offer",
  });
  const [typedProject, setTypedProject] = useState("all");
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(
    projectsData[activeProjects.i]
  );
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleClick = (i: number, filteringName: string) => {
    setLoading(true);
    setActiveProjects((prev) => ({
      ...prev,
      i,
      filteringName,
    }));
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
  const navigate = useNavigate();
  useEffect(() => {
    !isView && navigate("/projects");
  }, [isView, navigate]);

  return (
    <Background
      pattern1={windowSize.width < 800 ? PATTERN_MOBILE : PATTERN}
      sidePatter2Style={{ display: "none" }}
      style={{ flexDirection: "column", padding: "0" }}
    >
      <div className="filteringWrapper">
        <Header
          h1="НАШИ ПРОЕКТЫ"
          p={[
            "За несколько лет работы фонда «301. Земля мудрости» мы запустили ряд важных проектов по направлениям образования, культуры, науки и инноваций и целостного развития территории. ",
          ]}
          icon={ICON}
        />
        {windowSize.width > 800 ? (
          <div className="filteringBtnsWrapper">
            {projectsData.map((project, i) => (
              <button
                disabled={isView}
                key={i}
                className={`${activeProjects.i === i && "activeProjectBtn"}`}
                onClick={() => handleClick(i, project.name)}
              >
                {project.name}
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
            {typeBtn.map((btn) => (
              <Fragment key={btn.id}>
                <Button
                  text={btn.name}
                  link={false}
                  active={typedProject === btn.type}
                  to={""}
                  style={{
                    padding: "12px 22px",
                    border: "none",
                  }}
                  onClick={() => setTypedProject(btn.type)}
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
      {!isView ? (
        <>
          {!loading ? (
            currentProjects?.length ? (
              currentProjects?.map((project) => (
                <Fragment key={project.id}>
                  <Project
                    author={project.author}
                    authorImg={project.authorImg}
                    title={project.title}
                    flag={project.flag}
                    desc={project.desc}
                    projectImg={project.img}
                    heartit={() => heartit(project.id)}
                    isSaved={project.isSaved}
                    id={project.id}
                    setIsView={setIsView}
                    view={view}
                  />
                </Fragment>
              ))
            ) : (
              <div className="noProject">There is no project</div>
            )
          ) : (
            <Spin />
          )}
          {totalPages &&
            totalPages.length > 1 &&
            !!currentProjects?.length &&
            !loading && (
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
        </>
      ) : (
        <FullProjectInfo viewedProject={viewedProject} setIsView={setIsView} />
      )}
      <Footer />
    </Background>
  );
};

export default OurProjects;
