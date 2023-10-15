import EDIT from "../../../assets/edit.svg";
import SMS from "../../../assets/personal-sms.svg";
import TEL from "../../../assets/tel.svg";
import FACEBOOK from "../../../assets/personal-fb.svg";
import INSTAGRAM from "../../../assets/personal-instagram.svg";
import LINKEDIN from "../../../assets/personal-linkedIn.svg";
import TELEGRAM from "../../../assets/personal-telegram.svg";
import VIBER from "../../../assets/personal-viber.svg";
import "./index.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { useTranslation } from "react-i18next";

const PersonalInfo = () => {
  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);
  const { t } = useTranslation();

  return (
    <div className='personalInfo_wrapper'>
      <Helmet>
        <title>{`${user?.name} ${user?.last_name} | Personal Info`}</title>
      </Helmet>
      <div className='personalInfo_about'>
        <div className='personalInfo_title_wrapper'>
          <p className='personalInfo_title'>{t("personal.about-me")}</p>
          <NavLink to='/personal/personal-info/edit-profile'>
            <p>{t("personal.edit-profile")}</p>
            <img src={EDIT} alt='Edit' />
          </NavLink>
        </div>
        <p className='personalInfo_content'>
          {user && user[`about_me_${lang}` as keyof {}]}
        </p>
      </div>
      <div className='personalInfo_contact'>
        <p className='personalInfo_title'>{t("personal.contact")}</p>
        <div className='personalInfo_tel'>
          <img src={TEL} alt='Telephone' />
          <p>{user?.phone}</p>
        </div>
        <div className='personalInfo_tel'>
          <img src={SMS} alt='Telephone' />
          <p>{user?.email}</p>
        </div>
      </div>
      <div className='personalInfo_socialMedia'>
        <p className='personalInfo_title'>{t("personal.social-media")}</p>
        <div className='personalInfo_socialMedia_items_wrapper'>
          <div className='personalInfo_socialMedia_items'>
            <NavLink
              to='facebook.com'
              className='personalInfo_socialMedia_item'>
              <img src={FACEBOOK} alt='Facebook' />
              Facebook
            </NavLink>
            <NavLink
              to='instagram.com'
              className='personalInfo_socialMedia_item'>
              <img src={INSTAGRAM} alt='Instagram' />
              Instagram
            </NavLink>
          </div>
          <div className='personalInfo_socialMedia_items'>
            <NavLink
              to='linkedin.com'
              className='personalInfo_socialMedia_item'>
              <img src={LINKEDIN} alt='Linked In' />
              Linked In
            </NavLink>
            <NavLink
              to='telegram.com'
              className='personalInfo_socialMedia_item'>
              <img src={TELEGRAM} alt='Telegram' />
              Telegram
            </NavLink>
          </div>
          <div className='personalInfo_socialMedia_items'>
            <NavLink to='viber.com' className='personalInfo_socialMedia_item'>
              <img src={VIBER} alt='VIber' />
              Viber
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
