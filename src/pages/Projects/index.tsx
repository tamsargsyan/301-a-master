import Background from "../../components/Background";
import Header from "../../components/Header";
import SIDE_PATTERN_2 from "../../assets/patterns/side-2.svg";
import SIDE_PATTERN_2_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import SMALL_PATTERN_1 from "../../assets/patterns/small-1.svg";
import ICON from "../../assets/info/4.svg";
import ARROW from "../../assets/arrow.svg";
import FLAG from "../../assets/flag.svg";
import "./index.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import { useWindowSize } from "../../hooks/useWindowSize";

const Projects = () => {
  const windowSize = useWindowSize();
  const projects = [
    {
      id: 1,
      name: "Имя проекта",
      culture: "Культура",
      author: "Виктор Браун",
      flag: 5,
    },
    {
      id: 2,
      name: "Имя проекта",
      culture: "Культура",
      author: "Виктор Браун",
      flag: 5,
    },
    {
      id: 3,
      name: "Имя проекта",
      culture: "Культура",
      author: "Виктор Браун",
      flag: 5,
    },
    {
      id: 4,
      name: "Имя проекта",
      culture: "Культура",
      author: "Виктор Браун",
      flag: 5,
    },
    // {
    //   id: 5,
    //   name: "Имя проекта",
    //   culture: "Культура",
    //   author: "Виктор Браун",
    //   flag: 5,
    // },
    // {
    //   id: 6,
    //   name: "Имя проекта",
    //   culture: "Культура",
    //   author: "Виктор Браун",
    //   flag: 5,
    // },
    // {
    //   id: 7,
    //   name: "Имя проекта",
    //   culture: "Культура",
    //   author: "Виктор Браун",
    //   flag: 5,
    // },
  ];
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
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <>
      <div className="separatedPart"></div>
      <Background
        pattern1={
          windowSize.width < 975 ? SIDE_PATTERN_2_MOBILE : SIDE_PATTERN_2
        }
        pattern2={SMALL_PATTERN_1}
        shoudHaveSidePattern={false}
        style={{ padding: "60px 0" }}
      >
        <div className="projectsContainer" id="projects">
          <Header
            h1="НАШИ ПРОЕКТЫ"
            p={[
              "За несколько лет работы фонда «301. Земля мудрости» мы запустили ряд важных проектов по направлениям образования, культуры, науки и инноваций и целостного развития территории. ",
            ]}
            icon={ICON}
            className="differedHeaderContainer"
            style={{ width: "100%" }}
          />
          <div className="slider">
            <button className="leftBtn" onClick={handleBack}>
              <img src={ARROW} alt="Arrow" />
            </button>
            <button className="rightBtn" onClick={handleNext}>
              <img src={ARROW} alt="Arrow" />
            </button>
            {windowSize.width > 975 ? (
              <motion.div ref={carousel} className="carousel">
                <motion.div
                  className="innerCarousel"
                  initial={{ x: 0 }}
                  animate={{
                    x: -width * currentIndex,
                  }}
                >
                  {projects.map((project) => {
                    return (
                      <motion.div className="project" key={project.id}>
                        <div className="projectImg"></div>
                        <div className="projectInfo">
                          <h1>{project.name}</h1>
                          <span>{project.culture}</span>
                          <div className="author">
                            <span>{project.author}</span>
                            <span className="flag">
                              <img src={FLAG} alt="Flag" />
                              {project.flag}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ) : (
              <div className="innerCarousel">
                {projects.map((project) => {
                  return (
                    <div className="project" key={project.id}>
                      <div className="projectImg"></div>
                      <div className="projectInfo">
                        <h1>{project.name}</h1>
                        <span className="culture">{project.culture}</span>
                        <div className="author">
                          <span>{project.author}</span>
                          <span className="flag">
                            <img src={FLAG} alt="Flag" />
                            {project.flag}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="btns">
            <Button
              text="Другие проекты"
              style={{
                background: "#DD264E",
                boxShadow: "-21px 16px 38px 0px rgba(191, 9, 48, 0.21)",
                color: "#fff",
              }}
              link={true}
              to="/projects"
              className="homePage_btn"
            />
          </div>
        </div>
      </Background>
    </>
  );
};

export default Projects;
