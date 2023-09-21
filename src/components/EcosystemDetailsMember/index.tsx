import PERSON from "../../assets/ecosystemDetails/person1.png";
import ELIPSE from "../../assets/ecosystemDetails/elipse-sages.svg";
import ARROW from "../../assets/ecosystemDetails/arrow-red.svg";
import FLAG from "../../assets/flag.svg";
import "./index.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

interface EcoSystemDetailsMemberProps {
  expertProject?: {
    name: string;
    color: string;
    colorWeak: string;
    icon: string;
    elipse: string;
  };
}

const EcoSystemDetailsMember: React.FC<EcoSystemDetailsMemberProps> = ({
  expertProject,
}) => {
  const arr = new Array(6).fill("");
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
  return (
    <div className='ecoSystemDetailsMember'>
      <div className='memberHeader'>
        <div className='memberImg_container'>
          <img
            src={expertProject?.elipse}
            alt='Elipse'
            className='memberElipse'
          />
          <img src={PERSON} alt='Member' className='memberImg' />
        </div>
        <span>Alex KALENDEROĞLU</span>
      </div>
      <div className='memberContent'>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in
        </p>
        <div className='memberProjects_separatedPart'></div>
        <div className='memberProjects'>
          <div className='memberProjectHeader'>
            <p>Project</p>
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
          </div>
          <motion.div ref={carousel} className='carousel'>
            <motion.div
              className='innerCarousel'
              initial={{ x: 0 }}
              animate={{
                x: -width * currentIndex,
              }}>
              {arr.map((_, i) => (
                <motion.div className='project' key={i}>
                  <div className='projectImg'></div>
                  <div className='projectInfo'>
                    <div className='projectInfo_header'>
                      <h1>301 Land of Wisdom</h1>
                      <span className='flag'>
                        <img src={FLAG} alt='Flag' />
                        {/* {project.flag} */}
                        15
                      </span>
                    </div>
                    <span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <NavLink
            to='/301/projects'
            className='otherProjects_link'
            style={{ color: expertProject?.color }}>
            Other Projects
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
      </div>
    </div>
  );
};

export default EcoSystemDetailsMember;
