import { Fragment, useEffect, useState } from "react";
import LOGO from "../../assets/logo.svg";
import BIG_PATTERN from "../../assets/bigPatternNavbar.svg";
import SIDE_PATTERN from "../../assets/patterns/side-1-mobile.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../Button";
import "./index.css";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../globalFunctions/scrollToTop";
// import { useTranslation } from 'react-i18next';

export const menu = [
  {
    id: 1,
    name: "Home",
    link: "/301/build",
  },
  {
    id: 2,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    name: "Media",
    link: "/media",
  },
  {
    id: 4,
    name: "Calendar",
    link: "/calendar",
  },
  {
    id: 5,
    name: "About us",
    link: "/about",
  },
  {
    id: 6,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const windowSize = useWindowSize();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", openMenu);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openMenu]);

  const langs = ["en", "ru", "am"];
  const [lang, setLang] = useState({
    open: false,
    activeLang: "ru",
  });

  const copyLangs = langs.filter((item) => item !== lang.activeLang);

  // const a = useTranslation();

  // const handleLanguageChange = (language: string) => {
  //   console.log(a)
  //   // i18n.changeLanguage(language);
  //   // history.push(`/${language}`); // Update URL with new language
  // };

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
                      {link.name}
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
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="langsWrapper">
          <Button
            text={lang.activeLang}
            link={true}
            to={`${lang.activeLang}`}
            className="activeLang lang"
            onClick={() =>
              setLang((prev) => ({
                ...prev,
                open: !lang.open,
              }))
            }
          />
          {copyLangs.map((item, i) => (
            <Fragment key={i}>
              <Button
                text={item}
                link={true}
                to={`${item}`}
                className={`${lang.open && "openedLang"} lang`}
                onClick={() => {
                  setLang((prev) => ({
                    ...prev,
                    open: !lang.open,
                    activeLang: item,
                  }));
                }}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <Button text="Sign In" link={true} to="" />
    </div>
  );
};

export default Navbar;
