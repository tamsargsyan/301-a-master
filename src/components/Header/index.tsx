import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  isHomePageModal,
  openAccountTypeModal,
} from "../../actions/donateAction";
import cookies from "js-cookie";

interface HeaderProps {
  title: string;
  shortDescription?: string;
  description: string;
  btns?: any;
  style?: Object;
  btnStyles?: React.CSSProperties[];
  icon?: string;
  mainImg?: string;
  className?: string;
  isEcosystem?: boolean;
  innerClassName?: string;
  ourMissionDesc?: string;
  id?: string;
  faqDesc?: any;
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
  id,
  faqDesc,
}) => {
  const windowSize = useWindowSize();
  const ourMissionTxt = ourMissionDesc && ourMissionDesc[0];
  const dispatch = useDispatch();
  const [ourMission, setOurMission] = useState({
    txt: "Наша миссия — ",
    link: "формирование онтологической безопасности Армении.",
  });
  const lang = cookies.get("i18next");

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
    <div className={`${className} headerContainer`} id={id} style={style}>
      {icon && !isEcosystem && (
        <div className='icon'>
          <img src={icon} alt='Icon' decoding='async' loading='lazy' />
        </div>
      )}
      <div className='headerContent'>
        <div className={`${isEcosystem && "header_ecosystem"} header`}>
          {isEcosystem && (
            <div className='ecosystemImg'>
              <img src={icon} alt='Ecosystem' decoding='async' loading='lazy' />
            </div>
          )}
          <h1>{title}</h1>
          {shortDescription &&
            (ourMissionTxt ? (
              <p>
                {ourMission.txt}
                <NavLink
                  to={`/${lang}/about-us/#faq`}
                  style={{ color: "var(--main-color)" }}>
                  {ourMission.link}
                </NavLink>
              </p>
            ) : (
              <h2 dangerouslySetInnerHTML={{ __html: shortDescription }}></h2>
            ))}
        </div>
        {windowSize.width < 975 && mainImg && (
          <div className='mainImgHeader'>
            <img src={mainImg} alt='Main' decoding='async' loading='lazy' />
          </div>
        )}
        {description !== "" && (
          <div
            className={`${innerClassName} inner`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {faqDesc &&
          faqDesc.map((desc: string, i: number) => (
            <div
              key={i}
              className={`${innerClassName} inner`}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          ))}
        {btns && (
          <div className='btns'>
            {btns.map((btn: any, index: number) => (
              <Button
                key={index}
                text={btn.name}
                style={btnStyles && btnStyles[index]}
                link={btn.link !== ""}
                to={`/${lang}${btn.link}`}
                className={
                  className?.includes("homePageHeader")
                    ? "homePage_btn"
                    : undefined
                }
                onClick={() => {
                  if (btn.become && btn.id) {
                    dispatch(
                      openAccountTypeModal({
                        open: true,
                        id: btn.id,
                        name: btn.become,
                        type: btn.type,
                      })
                    );
                    dispatch(isHomePageModal(true));
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
