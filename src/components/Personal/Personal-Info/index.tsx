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

const PersonalInfo = () => {
  return (
    <div className='personalInfo_wrapper'>
      <div className='personalInfo_about'>
        <div className='personalInfo_title_wrapper'>
          <p className='personalInfo_title'>About me</p>
          <NavLink to='/personal/personal-info/edit-profile'>
            <p>Edit profile</p>
            <img src={EDIT} alt='Edit' />
          </NavLink>
        </div>
        <p className='personalInfo_content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in
        </p>
      </div>
      <div className='personalInfo_contact'>
        <p className='personalInfo_title'>Contact</p>
        <div className='personalInfo_tel'>
          <img src={TEL} alt='Telephone' />
          <p>+374 44 55 66 36</p>
        </div>
        <div className='personalInfo_tel'>
          <img src={SMS} alt='Telephone' />
          <p>nemoy@gmail.com</p>
        </div>
      </div>
      <div className='personalInfo_socialMedia'>
        <p className='personalInfo_title'>Social media</p>
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
