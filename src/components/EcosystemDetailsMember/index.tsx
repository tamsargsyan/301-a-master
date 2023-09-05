import PERSON from "../../assets/ecosystemDetails/person1.png";
import ELIPSE from "../../assets/ecosystemDetails/elipse.svg";
import ARROW from "../../assets/ecosystemDetails/arrow-red.svg";
import FLAG from "../../assets/flag.svg";
import "./index.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

const EcoSystemDetailsMember = () => {
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
          <img src={ELIPSE} alt='Elipse' className='memberElipse' />
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
                  background: currentIndex === 0 ? "#DD264E99" : "#DD264E",
                }}>
                <img src={ARROW} alt='Arrow' />
              </button>
              <button
                onClick={handleNext}
                style={{
                  background: currentIndex === 1 ? "#DD264E99" : "#DD264E",
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
          <NavLink to='/301/projects' className='otherProjects_link'>
            Other Projects <img src={ARROW} alt='Arrow' />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EcoSystemDetailsMember;
