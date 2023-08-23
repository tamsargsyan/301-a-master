import { menu } from "../../components/Navbar";
import LOCATION from "../../assets/location.svg";
import PHONE from "../../assets/phone.svg";
import EMAIL from "../../assets/email-white.svg";
import LOGO from "../../assets/301-footer.png";
import LOGO_MOBILE from "../../assets/301-footer-mobile.png";
import "./index.css";
import FollowUs from "../../components/FollowUs";
import { useWindowSize } from "../../hooks/useWindowSize";

interface FooterProps {
  followUs: any;
}

const Footer: React.FC<FooterProps> = ({ followUs }) => {
  const ecosystem = [
    {
      id: 1,
      name: "Sage",
    },
    {
      id: 2,
      name: "Club 301",
    },
    {
      id: 3,
      name: "Ambassadors",
    },
    {
      id: 4,
      name: "Volunteers",
    },
    {
      id: 5,
      name: "Experts",
    },
    {
      id: 6,
      name: "Partners",
    },
    {
      id: 7,
      name: "Fund friends",
    },
  ];
  const contactInfo = [
    {
      id: 1,
      info: "Ереван, ул. Московяна 24",
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
      <div className="separatedPart"></div>
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
              <h2>OUR ECOSYSTEM</h2>
              <div className="list">
                {ecosystem.map((system) => (
                  <span key={system.id}>{system.name}</span>
                ))}
              </div>
            </div>
            <div className="footerSecondPart">
              <h2>OUR MENU</h2>
              <div className="list">
                {menu.map((menu) => (
                  <a href="#projects" key={menu.id}>
                    {menu.name}
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
            <FollowUs links={followUs} />
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
