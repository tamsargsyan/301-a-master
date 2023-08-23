import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";

interface HeaderProps {
  h1: string;
  h2?: string;
  p?: string[];
  btns?: string[];
  style?: Object;
  btnStyles?: React.CSSProperties[];
  icon?: string;
  mainImg?: string;
  className?: string;
  isEcosystem?: boolean;
  innerClassName?: string;
}

const Header: React.FC<HeaderProps> = ({
  h1,
  h2,
  p,
  btns,
  icon,
  style,
  btnStyles,
  mainImg,
  className,
  isEcosystem,
  innerClassName,
}) => {
  const windowSize = useWindowSize();

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
          <h1>{h1}</h1>
          {h2 && <h2>{h2}</h2>}
        </div>
        {windowSize.width < 975 && mainImg && (
          <div className="mainImgHeader">
            <img src={mainImg} alt="Main" />
          </div>
        )}
        <div className={`${innerClassName} inner`}>
          {p?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
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
