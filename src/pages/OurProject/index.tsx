import { Fragment, useEffect, useState } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import PATTERN from "../../assets/patterns/side-2.svg";
import PATTERN_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import ICON from "../../assets/info/4.svg";
import Project from "../../components/Project";
import { Spin } from "antd";
import Button from "../../components/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import DropDown from "../../components/Dropdown";
import "./index.css";
import Footer from "../../components/Footer";
import ARROW_NEXT from "../../assets/arrow-next.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProjects } from "../../actions/apiActions";
import { RootState } from "../../store/configureStore";
import AUTHOR_1 from "../../assets/projectAuthor/1.svg";
// import ROSGOSTRAKH from "../../assets/info/rostgostrakh.svg";
import PROJECT_1 from "../../assets/projectAuthor/project-1.png";

const OurProjects = () => {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchingProjects("project"));
  }, [dispatch]);

  const lang = useSelector((state: RootState) => state.languageDitactor.lang);

  const { data, loading } = useSelector(
    (state: RootState) => state.projectData
  );
  const { ourProject, projects, projectCategory, projectStatus } = data;

  const [projectCategory_id, setProjectCategory_id] = useState(1);
  const [projectStatus_id, setProjectStatus_id] = useState(1);
  const filteredProjects = projects?.filter(
    (project: any) =>
      project.project_category_id === projectCategory_id &&
      project.project_status_id === projectStatus_id
  );

  const handleProjectCategory_id = (id: number) => {
    setProjectCategory_id(id);
  };

  const handleProjectStatus_id = (id: number) => {
    setProjectStatus_id(id);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects?.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages =
    filteredProjects &&
    new Array(Math.ceil(filteredProjects?.length / projectsPerPage)).fill(0);

  const [projectId, setProjectId] = useState<number | null>(null);
  const heartit = (id: number) => {
    setProjectId(id);
  };

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
              title={ourProject[0][`title_${lang}`]}
              description={ourProject[0][`description_${lang}`]}
              icon={ICON}
            />
            {windowSize.width > 800 ? (
              <div className="filteringBtnsWrapper">
                {projectCategory.map((category: any, i: number) => (
                  <button
                    disabled={false}
                    key={i}
                    className={`${
                      projectCategory_id === category.id && "activeProjectBtn"
                    }`}
                    onClick={() => handleProjectCategory_id(category.id)}
                  >
                    {category[`name_${lang}`]}
                  </button>
                ))}
              </div>
            ) : (
              <DropDown
                items={projectCategory}
                onClickItem={handleProjectCategory_id}
                type="projectCategory"
                text={
                  projectCategory.find(
                    (category: any) => category.id === projectCategory_id
                  )[`name_${lang}`]
                }
                style={{ marginBottom: "20px" }}
                objKey="name"
              />
            )}
            {windowSize.width > 800 ? (
              <div className="typedBtnsWrapper">
                {projectStatus.map((status: any) => (
                  <Fragment key={status.id}>
                    <Button
                      text={status[`name_${lang}`]}
                      link={false}
                      active={projectStatus_id === status.id}
                      to={""}
                      style={{
                        padding: "12px 22px",
                        border: "none",
                      }}
                      onClick={() => handleProjectStatus_id(status.id)}
                      disabled={false}
                      className="typedBtn"
                    />
                  </Fragment>
                ))}
              </div>
            ) : (
              <DropDown
                items={projectStatus}
                onClickItem={handleProjectStatus_id}
                type="projectStatus"
                text={
                  projectStatus.find(
                    (status: any) => status.id === projectStatus_id
                  )[`name_${lang}`]
                }
                style={{ width: "50vw", marginRight: "auto" }}
                objKey="name"
              />
            )}
          </div>
          {currentProjects.length ? (
            currentProjects?.map((project: any) => (
              <Fragment key={project.id}>
                <Project
                  author="Peter Nemoy"
                  authorImg={AUTHOR_1}
                  title={project[`project_name_${lang}`]}
                  flag={15}
                  desc={project[`problem_description_${lang}`]}
                  projectImg={PROJECT_1}
                  heartit={() => heartit(project.id)}
                  isSaved={project.id === projectId}
                  id={project.id}
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
                {totalPages.map((_: any, i: number) => (
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
          <Footer followUs={undefined} separatedPart={true} />
        </>
      )}
    </Background>
  );
};

export default OurProjects;
