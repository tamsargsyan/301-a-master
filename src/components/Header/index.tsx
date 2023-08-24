import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";

interface HeaderProps {
  title: string;
  shortDescription?: string;
  description?: any;
  btns?: string[];
  style?: Object;
  btnStyles?: React.CSSProperties[];
  icon?: string;
  mainImg?: string;
  className?: string;
  isEcosystem?: boolean;
  innerClassName?: string;
  ourMissionDesc?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  shortDescription,
  description,
  btns,
  icon,
  style,
  btnStyles,
  mainImg,
  className,
  isEcosystem,
  innerClassName,
  ourMissionDesc,
}) => {
  const windowSize = useWindowSize();
  const ourMissionTxt = ourMissionDesc && ourMissionDesc[0];
  const ourMissionLink = ourMissionDesc && ourMissionDesc[1];

  return (
    <div className={`${className} headerContainer`} style={style}>
      {icon && !isEcosystem && (
        <div className="icon">
          <img src={icon} alt="Icon" />
        </div>
      )}
      <div className="headerContent">
        <div className={`${isEcosystem && "header_ecosystem"} header`}>
          {isEcosystem && (
            <div className="ecosystemImg">
              <img src={icon} alt="Ecosystem" />
            </div>
          )}
          <h1>{title}</h1>
          {shortDescription &&
            (ourMissionDesc ? (
              <p>
                {ourMissionTxt} —
                <NavLink to="" style={{ color: "var(--main-color)" }}>
                  {ourMissionLink}
                </NavLink>
              </p>
            ) : (
              <h2 dangerouslySetInnerHTML={{ __html: shortDescription }}></h2>
            ))}
        </div>
        {windowSize.width < 975 && mainImg && (
          <div className="mainImgHeader">
            <img src={mainImg} alt="Main" />
          </div>
        )}
        <div
          className={`${innerClassName} inner`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {btns && (
          <div className="btns">
            {btns.map((btnText, index) => (
              <Button
                key={index}
                text={btnText}
                style={btnStyles && btnStyles[index]}
                link={true}
                to=""
                className={
                  className?.includes("homePageHeader")
                    ? "homePage_btn"
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
