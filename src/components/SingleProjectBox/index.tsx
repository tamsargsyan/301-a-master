import "./index.css";
import { motion } from "framer-motion";
import FLAG from "../../assets/flag.svg";

interface SingleProjectBoxProps {
  title: string;
  description: string;
  author?: string;
  flag: number;
  authorImg?: string;
  budget?: string;
  collected?: string;
  projectImg?: string;
  className?: string;
  onClick?: () => void;
}

const SingleProjectBox: React.FC<SingleProjectBoxProps> = ({
  title,
  description,
  author,
  flag,
  authorImg,
  budget,
  collected,
  projectImg,
  className,
  onClick,
}) => {
  const calcPercent = (val1: number, val2: number) => {
    return Math.floor((val1 / val2) * 100);
  };

  if (className?.includes("donation_project")) {
    return (
      <motion.div className={`${className} project`} onClick={onClick}>
        <div
          className='projectImg'
          style={{ backgroundImage: `url(${projectImg})` }}></div>
        <div className='projectInfo'>
          <div className='author'>
            <div className='ourProject__author'>
              <img src={authorImg} alt='Author' />
              <span>{author}</span>
            </div>
            <span className='flag'>
              <img src={FLAG} alt='Flag' />
              {flag}
            </span>
          </div>
          <div>
            <h1>{title}</h1>
            <span className='donationProject_desc'>
              {description?.slice(0, 3)}
            </span>
          </div>
          <div className='project_progress'>
            <div className='projectProgress_info'>
              <span className='sum'>{budget} USD</span>
              <span className='percent'>
                {budget &&
                  collected &&
                  (+collected >= +budget
                    ? "100%"
                    : `${calcPercent(+collected, +budget)}%`)}
              </span>
            </div>
            <div className='progress'>
              <div
                className='progress_line'
                style={{
                  width:
                    budget &&
                    collected &&
                    (+collected >= +budget
                      ? "100%"
                      : `${calcPercent(+collected, +budget)}%`),
                }}></div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  if (className?.includes("personal_project")) {
    return (
      <motion.div className={`${className} project`} onClick={onClick}>
        <div
          className='projectImg'
          style={{ backgroundImage: `url(${projectImg})` }}></div>
        <div className='projectInfo'>
          <div className='author'>
            <h1>{title}</h1>
            <span className='flag'>
              <img src={FLAG} alt='Flag' />
              {flag}
            </span>
          </div>
          <span className='donationProject_desc'>
            {description?.slice(0, 3)}
          </span>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div className={`${className} project`}>
      <div
        className='projectImg'
        style={{ backgroundImage: `url(${projectImg})` }}></div>
      <div className='projectInfo'>
        <h1>{title}</h1>
        <span>{description?.slice(0, 3)}</span>
        <div className='author'>
          <span>{author}</span>
          <span className='flag'>
            <img src={FLAG} alt='Flag' />
            {flag}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProjectBox;
