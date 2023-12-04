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
import cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../store/configureStore";
import { fetchingContact } from "../../actions/apiActions";
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
      name: "friends",
    },
  ];
  const { data } = useSelector((state: RootState) => state.contact);
  const windowSize = useWindowSize();
  const lang = cookies.get("i18next");

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   //@ts-ignore
  //   dispatch(fetchingContact("contact-us"));
  // }, []);

  return (
    <>
      {separatedPart && <div className='separatedPart'></div>}
      <div className='footerContainer'>
        <div className='footerBg'></div>
        {/* <div className="pattern1">
          <img src={PATTERN} alt="Pattern" />
        </div>
        <div className="pattern2">
          <img src={PATTERN} alt="Pattern" />
        </div> */}
        <div className='footerInfo'>
          <div className='ecosystemMenu'>
            <div className='footerFirstPart'>
              <h2>{t("footer.ecosystem.title")}</h2>
              <div className='list'>
                {ecosystem.map(system => (
                  <span key={system.id}>
                    {t(`footer.ecosystem.${system.name}`)}
                  </span>
                ))}
              </div>
            </div>
            <div className='footerSecondPart'>
              <h2>{t("navbar.our-menu")}</h2>
              <div className='list'>
                {menu.map(menu => (
                  <a href={`/${lang}${menu.link}`} key={menu.id}>
                    {t(`navbar.${menu.name}`)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='footerThirdPart'>
            {data && (
              <div className='list'>
                <span>
                  <img
                    src={LOCATION}
                    alt='Icon'
                    decoding='async'
                    loading='lazy'
                  />
                  {data.contact && data.contact[`address_${lang}`]}
                </span>
                <span>
                  <img src={PHONE} alt='Icon' decoding='async' loading='lazy' />
                  {data.contact?.phone}
                </span>
                <span>
                  <img src={EMAIL} alt='Icon' decoding='async' loading='lazy' />
                  {data.contact?.email}
                </span>
              </div>
            )}
            {windowSize.width > 875 && (
              <div className='logo301Footer'>
                <img src={LOGO} alt='301' decoding='async' loading='lazy' />
              </div>
            )}
          </div>
          <div className='footerForthtPart'>
            <FollowUs />
          </div>
          {windowSize.width < 875 && (
            <div className='logo301Footer'>
              <img
                src={LOGO_MOBILE}
                alt='301'
                decoding='async'
                loading='lazy'
              />
            </div>
          )}
        </div>
        <div className='footerLine'></div>
      </div>
    </>
  );
};

export default Footer;
