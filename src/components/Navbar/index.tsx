import { Fragment, useEffect, useState } from "react";
import LOGO from "../../assets/logo.svg";
import BIG_PATTERN from "../../assets/bigPatternNavbar.svg";
import SIDE_PATTERN from "../../assets/patterns/side-1-mobile.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { scrollToTop } from "../../globalFunctions/scrollToTop";
import { useTranslation } from "react-i18next";
import { createBrowserHistory } from "history";
import i18next from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { languageDitactor } from "../../actions/language";
import { openDonateModal } from "../../actions/donateAction";
import { RootState } from "../../store/configureStore";
import NOTIFICATION from "../../assets/notification.svg";
import { storageBase } from "../../utils/storage";
import NO_IMAGE from "../../assets/no-image-user.png";

const history = createBrowserHistory(); // Create a history instance

export const menu = [
  {
    id: 1,
    name: "home",
    link: "/",
  },
  {
    id: 2,
    name: "projects",
    link: "/projects",
  },
  {
    id: 3,
    name: "media",
    link: "/media",
  },
  {
    id: 4,
    name: "calendar",
    link: "/calendar",
  },
  {
    id: 5,
    name: "about-us",
    link: "/about-us",
  },
  {
    id: 6,
    name: "contact",
    link: "/contact",
  },
];

interface NavbarProps {
  setOpenModal: (arg: boolean) => void;
  // setDonation: (arg: boolean) => void;
  setModalName: (arg: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  setOpenModal,
  // setDonation,
  setModalName,
}) => {
  const windowSize = useWindowSize();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", openMenu);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openMenu]);
  const langs = [
    {
      id: 1,
      shortName: "en",
      longName: "ENGLISH",
    },
    {
      id: 2,
      shortName: "ru",
      longName: "Русский",
    },
    {
      id: 3,
      shortName: "am",
      longName: "Հայերեն",
    },
  ];

  const [openLangs, setOpenLangs] = useState(false);
  const lang = i18next.language;
  const copyLangs = langs.filter(item => item.shortName !== lang);
  const differentLang = langs.find(
    item1 => !copyLangs.some(item2 => item1.id === item2.id)
  );
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    const newPath = `/${language}${location.pathname}`;
    history.replace(newPath);
    dispatch(languageDitactor(language));
    setOpenLangs(false);
  };
  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='navbarContainer'>
      {windowSize.width < 975 && (
        <div className='mobileMenu'>
          <div
            className={`${openMenu && "openedHamburger"} hamburger`}
            onClick={() => setOpenMenu(!openMenu)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          {openMenu && (
            <div className='openedMobileMenu'>
              <div className='bigPatternNav'>
                <img src={BIG_PATTERN} alt='Pattern' />
              </div>
              <div className='sidePattern1'>
                <img src={SIDE_PATTERN} alt='Pattern' />
              </div>
              <div className='sidePattern2'>
                <img src={SIDE_PATTERN} alt='Pattern' />
              </div>
              <div className='menu'>
                <div className='link'>
                  {menu.map((link, i) => (
                    <NavLink
                      onClick={() => {
                        setOpenMenu(false);
                        scrollToTop();
                      }}
                      key={i}
                      to={link.link}
                      style={{ animationDelay: `${i * 0.1}s` }}>
                      {t(`navbar.${link.name}`)}
                    </NavLink>
                  ))}
                </div>
                <div className='link logout'>
                  <a href='/'>Log out</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {openMenu ? (
        <div className='logo'>
          <span>Меню</span>
        </div>
      ) : (
        <button className='logo' onClick={scrollToTop}>
          <img src={LOGO} alt='Logo' />
        </button>
      )}
      <div className='menu'>
        <div className='link'>
          {menu.map((link, i) => (
            <NavLink key={i} to={link.link} onClick={scrollToTop}>
              {t(`navbar.${link.name}`)}
            </NavLink>
          ))}
        </div>
        <div className='langsWrapper'>
          <Button
            text={
              windowSize.width < 800
                ? differentLang?.longName
                : differentLang?.shortName
            }
            link={false}
            to={""}
            className='activeLang lang'
            onClick={() => setOpenLangs(!openLangs)}
          />
          <div className='notActiveLangs_wrapper'>
            {copyLangs.map((lang, i) => (
              <Fragment key={i}>
                <Button
                  text={windowSize.width < 800 ? lang.longName : lang.shortName}
                  link={false}
                  to={""}
                  className={`${openLangs && "openedLang"} activeLang_${
                    i + 1
                  } lang`}
                  onClick={() => handleLanguageChange(lang.shortName)}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      {windowSize.width > 800 ? (
        <>
          {isAuthenticated ? (
            <div className='navbar_user_wrapper'>
              <button className='navbar_notif'>
                <img src={NOTIFICATION} alt='Notification' />
                <span className='notification_number'>3</span>
              </button>
              <NavLink to='personal/personal-info' className='navbar_user'>
                <img
                  src={user.image ? `${storageBase}/${user.image}` : NO_IMAGE}
                  alt='Person'
                />
                <p>
                  {user.name} {user.last_name}
                </p>
              </NavLink>
            </div>
          ) : (
            <div className='btns' style={{ margin: 0 }}>
              <Button
                text={t(`btns.donate`)}
                link={false}
                to=''
                className='signIn-btn'
                onClick={() => {
                  dispatch(openDonateModal(true));
                  setModalName("donate");
                }}
                style={{
                  padding: "9px 23px",
                  background: "var(--main-color)",
                  color: "#fff  ",
                }}
              />
              <Button
                text={t(`navbar.sign-in`)}
                link={false}
                to=''
                className='signIn-btn'
                onClick={() => {
                  setOpenModal(true);
                  setModalName("signIn");
                  setSearchParams({ signIn: "active" });
                }}
                style={{ padding: "9px 23px" }}
              />
            </div>
          )}
        </>
      ) : (
        <Button
          text={t(`navbar.sign-in`)}
          link={false}
          to=''
          className='signIn-btn'
          onClick={() => setOpenModal(true)}
          style={{ padding: "9px 23px" }}
        />
      )}
    </div>
  );
};

export default Navbar;
