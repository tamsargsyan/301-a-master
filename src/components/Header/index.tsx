import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";
import { useEffect, useState } from "react";
import { RootState } from "../../store/configureStore";
import { useSelector } from "react-redux";

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
  const [ourMission, setOurMission] = useState({
    txt: "Наша миссия — ",
    link: "формирование онтологической безопасности Армении.",
  });
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);

  useEffect(() => {
    if (lang === "en") {
      setOurMission({
        txt: "Our mission is ",
        link: "the formation of the ontological security of Armenia.",
      });
    } else if (lang === "am") {
      setOurMission({
        txt: "Մեր առաքելությունը ",
        link: "Հայաստանի գոյաբանական անվտանգության ձևավորումն է:",
      });
    }
  }, [lang]);

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
            (ourMissionTxt ? (
              <p>
                {ourMission.txt}
                <NavLink to="" style={{ color: "var(--main-color)" }}>
                  {ourMission.link}
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
