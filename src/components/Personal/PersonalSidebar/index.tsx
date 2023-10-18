import ARROW from "../../../assets/arrow-next-red.svg";
import SMS from "../../../assets/sms.svg";
import "./index.css";
import { NavLink } from "react-router-dom";
import { storageBase } from "../../../utils/storage";
import { useTranslation } from "react-i18next";
import NO_IMAGE from "../../../assets/no-image-user.png";

const PersonalSidebar = () => {
  const { t } = useTranslation();

  const bar = [
    {
      id: 1,
      name: t("personal.personal-info"),
      path: "personal/personal-info",
      isActive: false,
    },
    {
      id: 2,
      name: t("personal.my-project"),
      path: "personal/my-project",
      isActive: false,
    },
    {
      id: 3,
      name: t("personal.my-events"),
      path: "personal/my-events",
      isActive: false,
    },
    {
      id: 4,
      name: t("personal.settings"),
      path: "personal/settings",
      isActive: false,
    },
  ];
  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='personal_bar_wrapper'>
      <div className='person_wrapper'>
        <div className='person_bg'></div>
        <div className='person_profile'>
          <div className='prof_pic'>
            <img
              style={{ background: user.image ? "transparent" : "#fff" }}
              src={user.image ? `${storageBase}/${user?.image}` : NO_IMAGE}
              alt='Person'
            />
          </div>
        </div>
        <p className='prof_name'>
          {user?.name} {user?.last_name}
        </p>
        <button className='prof_sms'>
          <div className='sms_img'>
            <span className='sms_notif'>3</span>
            <img src={SMS} alt='SMS ' />
          </div>
          <span>{t("personal.my-message")}</span>
        </button>
      </div>
      <div className='personal_bar'>
        {bar.map(bar => (
          <NavLink
            end
            to={`/${bar.path}`}
            key={bar.id}
            className={`personal_bar_item`}
            // onClick={() => handleClickMenu(bar.id)}
          >
            {bar.name}
            <img src={ARROW} alt='Arrow' />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PersonalSidebar;
