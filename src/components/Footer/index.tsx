import { menu } from "../Navbar";
import LOCATION from "../../assets/location.svg";
import PHONE from "../../assets/phone.svg";
import EMAIL from "../../assets/email-white.svg";
import LOGO from "../../assets/301-footer.png";
import LOGO_MOBILE from "../../assets/301-footer-mobile.png";
import "./index.css";
import FollowUs from "../FollowUs";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

interface FooterProps {
  separatedPart?: Boolean;
}

const Footer: React.FC<FooterProps> = ({ separatedPart }) => {
  const { t } = useTranslation();
  const ecosystem = [
    {
      id: 1,
      name: "sage",
    },
    {
      id: 2,
      name: "club301",
    },
    {
      id: 3,
      name: "ambassadors",
    },
    {
      id: 5,
      name: "experts",
    },
    {
      id: 6,
      name: "partners",
    },
    {
      id: 7,
      name: "fund-friends",
    },
  ];
  const contactInfo = [
    {
      id: 1,
      info: t("footer.address"),
      icon: LOCATION,
    },
    {
      id: 2,
      info: "+374 567890",
      icon: PHONE,
    },
    {
      id: 3,
      info: "301@loftpineapple.com",
      icon: EMAIL,
    },
  ];
  const windowSize = useWindowSize();

  return (
    <>
      {separatedPart && <div className="separatedPart"></div>}
      <div className="footerContainer">
        <div className="footerBg"></div>
        {/* <div className="pattern1">
          <img src={PATTERN} alt="Pattern" />
        </div>
        <div className="pattern2">
          <img src={PATTERN} alt="Pattern" />
        </div> */}
        <div className="footerInfo">
          <div className="ecosystemMenu">
            <div className="footerFirstPart">
              <h2>{t("footer.ecosystem.title")}</h2>
              <div className="list">
                {ecosystem.map((system) => (
                  <span key={system.id}>
                    {t(`footer.ecosystem.${system.name}`)}
                  </span>
                ))}
              </div>
            </div>
            <div className="footerSecondPart">
              <h2>{t("navbar.our-menu")}</h2>
              <div className="list">
                {menu.map((menu) => (
                  <a href={menu.link} key={menu.id}>
                    {t(`navbar.${menu.name}`)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footerThirdPart">
            <div className="list">
              {contactInfo.map((contact) => (
                <span key={contact.id}>
                  <img src={contact.icon} alt="Icon" />
                  {contact.info}
                </span>
              ))}
            </div>
            {windowSize.width > 875 && (
              <div className="logo301Footer">
                <img src={LOGO} alt="301" />
              </div>
            )}
          </div>
          <div className="footerForthtPart">
            <FollowUs />
          </div>
          {windowSize.width < 875 && (
            <div className="logo301Footer">
              <img src={LOGO_MOBILE} alt="301" />
            </div>
          )}
        </div>
        <div className="footerLine"></div>
      </div>
    </>
  );
};

export default Footer;
