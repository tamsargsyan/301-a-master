import ARROW from "../../../assets/arrow-next-red.svg";
import SMS from "../../../assets/sms.svg";
import PERSON from "../../../assets/projectAuthor/person-1.svg";
import "./index.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const PersonalSidebar = () => {
  const [bar, setBar] = useState([
    {
      id: 1,
      name: "Personal info",
      path: "personal/personal-info",
      isActive: false,
    },
    {
      id: 2,
      name: "My project",
      path: "personal/my-project",
      isActive: false,
    },
    {
      id: 3,
      name: "My events",
      path: "personal/my-events",
      isActive: false,
    },
    {
      id: 4,
      name: "Settings",
      path: "personal/settings",
      isActive: false,
    },
  ]);

  const handleClickMenu = (id: number) => {
    const updatedBar = bar.map(item => {
      if (item.id === id) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setBar(updatedBar);
  };

  return (
    <div className='personal_bar_wrapper'>
      <div className='person_wrapper'>
        <div className='person_bg'></div>
        <div className='person_profile'>
          <div className='prof_pic'>
            {/* <img src={ELLIPSE} alt='Ellipse' /> */}
            <img src={PERSON} alt='Person' />
          </div>
        </div>
        <p className='prof_name'>Peter Nemoy</p>
        <button className='prof_sms'>
          <div className='sms_img'>
            <span className='sms_notif'>3</span>
            <img src={SMS} alt='SMS ' />
          </div>
          <span>My message</span>
        </button>
      </div>
      <div className='personal_bar'>
        {bar.map(bar => (
          <NavLink
            end
            to={`/${bar.path}`} // Use a leading slash here to make it an absolute path
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
