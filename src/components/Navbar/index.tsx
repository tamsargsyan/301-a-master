import { Fragment, useEffect, useState } from "react";
import LOGO from "../../assets/logo.svg";
import BIG_PATTERN from "../../assets/bigPatternNavbar.svg";
import SIDE_PATTERN from "../../assets/patterns/side-1-mobile.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";
import { NavLink, useLocation } from "react-router-dom";
import { scrollToTop } from "../../globalFunctions/scrollToTop";
import { useTranslation } from "react-i18next";
import { createBrowserHistory } from "history";
import i18next from "i18next";
import { useDispatch } from "react-redux";
import { languageDitactor } from "../../actions/language";

const history = createBrowserHistory(); // Create a history instance

export const menu = [
  {
    id: 1,
    name: "home",
    link: "/301/build",
  },
  {
    id: 2,
    name: "projects",
    link: "/301/build/projects",
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
}

const Navbar: React.FC<NavbarProps> = ({ setOpenModal }) => {
  const windowSize = useWindowSize();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", openMenu);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openMenu]);

  const langs = ["en", "ru", "am"];
  const [openLangs, setOpenLangs] = useState(false);
  const lang = i18next.language;
  const copyLangs = langs.filter((item) => item !== lang);
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

  return (
    <div className="navbarContainer">
      {windowSize.width < 975 && (
        <div className="mobileMenu">
          <div
            className={`${openMenu && "openedHamburger"} hamburger`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {openMenu && (
            <div className="openedMobileMenu">
              <div className="bigPatternNav">
                <img src={BIG_PATTERN} alt="Pattern" />
              </div>
              <div className="sidePattern1">
                <img src={SIDE_PATTERN} alt="Pattern" />
              </div>
              <div className="sidePattern2">
                <img src={SIDE_PATTERN} alt="Pattern" />
              </div>
              <div className="menu">
                <div className="link">
                  {menu.map((link, i) => (
                    <NavLink
                      onClick={() => {
                        setOpenMenu(false);
                        scrollToTop();
                      }}
                      key={i}
                      to={link.link}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {t(`navbar.${link.name}`)}
                    </NavLink>
                  ))}
                </div>
                <div className="link logout">
                  <a href="/">Log out</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {openMenu ? (
        <div className="logo">
          <span>Меню</span>
        </div>
      ) : (
        <button className="logo" onClick={scrollToTop}>
          <img src={LOGO} alt="Logo" />
        </button>
      )}
      <div className="menu">
        <div className="link">
          {menu.map((link, i) => (
            <NavLink key={i} to={link.link} onClick={scrollToTop}>
              {t(`navbar.${link.name}`)}
            </NavLink>
          ))}
        </div>
        <div className="langsWrapper">
          <Button
            text={lang}
            link={false}
            to={""}
            className="activeLang lang"
            onClick={() => setOpenLangs(!openLangs)}
          />
          {copyLangs.map((lang, i) => (
            <Fragment key={i}>
              <Button
                text={lang}
                link={false}
                to={""}
                className={`${openLangs && "openedLang"} lang`}
                onClick={() => handleLanguageChange(lang)}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <Button
        text={t(`navbar.sign-in`)}
        link={false}
        to=""
        className="signIn-btn"
        onClick={() => setOpenModal(true)}
      />
    </div>
  );
};

export default Navbar;
