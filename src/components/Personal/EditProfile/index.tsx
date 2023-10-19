import { Select, Spin } from "antd";
import "./index.css";
import { useTranslation } from "react-i18next";
import country_dial from "../../../locales/country_dial.json";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import CLOUD from "../../../assets/cloud.svg";
import PROF_PIC from "../../../assets/prof-pic.png";
import Button from "../../Button";
import FACEBOOK from "../../../assets/personal-fb.svg";
import INSTAGRAM from "../../../assets/personal-instagram.svg";
import LINKEDIN from "../../../assets/personal-linkedIn.svg";
import TELEGRAM from "../../../assets/personal-telegram.svg";
import VIBER from "../../../assets/personal-viber.svg";
import CLOSE from "../../../assets/close.svg";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { storageBase } from "../../../utils/storage";
import { usePostRequest } from "../../../actions/apiActions";
const { Option } = Select;

const EditProfile = () => {
  const { t } = useTranslation();
  const filterOptionTel = (
    input: string,
    option: { label: string; value: string }
  ) => (option?.value ?? "").toLowerCase().includes(input.toLowerCase());
  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    id: user.id,
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    about_me_en: user.about_me_en,
    phone: user.phone,
    current_password: user.current_password,
    password: user.password,
    password_confirmation: user.password_confirmation,
    image: user.image,
  });
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };
  const [telCode, setTelCode] = useState("+374");
  const { postRequest, postLoading, response, error } = usePostRequest();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    postRequest("edit-profile", formData, config);
  };

  return (
    <div className='personalInfo_wrapper'>
      <Helmet>
        <title>
          {user.name} {user.last_name} | Edit Profile
        </title>
      </Helmet>
      <p className='personalInfo_title'>{t("personal.edit-profile")}</p>
      <form className='personal_form' noValidate onSubmit={handleSubmit}>
        <div className='prof_pic'>
          <div>
            <div className='signUp_formGroup'>
              <label htmlFor='personal_name'>{t("inputs.name")}</label>
              <input
                type='text'
                id='personal_name'
                name='signUp'
                className='signUp_input'
                value={formData.name}
                onChange={e =>
                  setFormData(prev => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='personal_surname'>{t("inputs.surname")}</label>
              <input
                type='text'
                id='personal_surname'
                name='signUp'
                className='signUp_input'
                value={formData.last_name}
                onChange={e =>
                  setFormData(prev => ({
                    ...prev,
                    last_name: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className='pic'>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              id='pic_upload'
            />
            <img
              src={formData.image ? formData.image : PROF_PIC}
              alt='Profile'
              className='prof_img'
            />
            <label htmlFor='pic_upload'>
              <img src={CLOUD} alt='Cloud' />
              {t("personal.replace")}
            </label>
          </div>
        </div>
        <div className='signUp_formGroup signUp_textareaGroup'>
          <label htmlFor='personal_about'>{t("personal.about-me")}</label>
          <textarea
            id='personal_about'
            name='message'
            // rows={7}
            // cols={60}
            value={formData.about_me_en}
            onChange={e =>
              setFormData(prev => ({ ...prev, about_me_en: e.target.value }))
            }
            required
            className='signUp_textarea'
          />
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_tel'>{t("inputs.phone")}</label>
          <div className='signUp_tel'>
            <Select
              className='signUp_selector'
              showSearch
              value={telCode}
              placeholder={t("inputs.choose")}
              optionFilterProp='children'
              onChange={val => setTelCode(val)}
              //@ts-ignore
              filterOption={filterOptionTel}
              // options={country_dial}
            >
              {country_dial.map(country => (
                <Option key={country.value} value={country.label}>
                  <div
                    className='custom-option'
                    style={{ display: "flex", gap: "6px" }}>
                    <span className={`fi fi-${country.value.toLowerCase()}`} />
                    {country.label}
                  </div>
                </Option>
              ))}
            </Select>
            <div className='signUp_telWrapper'>
              <input
                type='number'
                id='personal_tel'
                name='signUp'
                className='signUp_input'
                value={formData.phone.split(" ")[1]}
              />
            </div>
          </div>
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_email'>{t("sign-in.email")}</label>
          <input
            type='text'
            id='personal_email'
            name='signUp'
            className='signUp_input'
            value={formData.email}
            onChange={e =>
              setFormData(prev => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_pass'>{t("inputs.password_current")}</label>
          <input
            type='text'
            id='personal_pass'
            name='signUp'
            className='signUp_input'
            value={formData.current_password}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                current_password: e.target.value,
              }))
            }
          />
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_newPass'>{t("inputs.password_new")}</label>
          <input
            type='text'
            id='personal_newPass'
            name='signUp'
            className='signUp_input'
            value={formData.password}
            onChange={e =>
              setFormData(prev => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_repeatPass'>
            {t("inputs.password_confirmation")}
          </label>
          <input
            type='text'
            id='personal_repeatPass'
            name='signUp'
            className='signUp_input'
            value={formData.password_confirmation}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                password_confirmation: e.target.value,
              }))
            }
          />
        </div>
        <p className='onTheWeb'>{t("personal.on_the_web")}</p>
        <div className='personal_add_socialMedias'>
          <p className='onTheWeb'>{t("personal.social-media")}</p>
          <div className='socialMedia_inputs'>
            <div>
              <img src={FACEBOOK} alt='Facebook' />
              <p>Facebook</p>
            </div>
            <div>
              <input
                placeholder='Facebook'
                value='@arnak.qerobyanh'
                className='socialMedia_input'
              />
              <button>
                <img src={CLOSE} alt='Close' />
              </button>
            </div>
          </div>
          <div className='socialMedia_inputs'>
            <div>
              <img src={INSTAGRAM} alt='Instagram' />
              <p>Instagram</p>
            </div>
            <div>
              <input
                placeholder='Instagram'
                value='@arnak.qerobyanh'
                className='socialMedia_input'
              />
              <button>
                <img src={CLOSE} alt='Close' />
              </button>
            </div>
          </div>
          <div className='socialMedia_inputs'>
            <div>
              <img src={LINKEDIN} alt='Linked In' />
              <p>Linked In</p>
            </div>
            <div>
              <input
                placeholder='Linked In'
                value='@arnak.qerobyanh'
                className='socialMedia_input'
              />
              <button>
                <img src={CLOSE} alt='Close' />
              </button>
            </div>
          </div>
          <div className='socialMedia_inputs'>
            <div>
              <img src={TELEGRAM} alt='Telegram' />
              <p>Telegram</p>
            </div>
            <div>
              <input
                placeholder='Telegram'
                value='@arnak.qerobyanh'
                className='socialMedia_input'
              />
              <button>
                <img src={CLOSE} alt='Close' />
              </button>
            </div>
          </div>
          <div className='socialMedia_inputs'>
            <div>
              <img src={VIBER} alt='Viber' />
              <p>Viber</p>
            </div>
            {/* <div>
              <input
                placeholder='Telegram'
                value='@arnak.qerobyanh'
                className='socialMedia_input'
              />
              <button>
                <img src={CLOSE} alt='Close' />
              </button>
            </div> */}
          </div>
          <div className='socialMedia_addLink'>
            <div className='signUp_formGroup'>
              <label htmlFor='personal_linkTitle'>Link Title</label>
              <input
                type='text'
                id='personal_linkTitle'
                name='signUp'
                className='signUp_input'
                placeholder='Enter link title'
                // value='Peter'
              />
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='personal_url'>Url</label>
              <input
                type='text'
                id='personal_url'
                name='signUp'
                className='signUp_input'
                placeholder='Enter URL'
                // value='Peter'
              />
            </div>
            <div className='signUp_btns'>
              <Button
                text={t("btns.add")}
                link={false}
                to={""}
                type='submit'
                style={{
                  background: "var(--main-color)",
                  border: "none",
                  color: "#fff",
                }}
              />
            </div>
          </div>
        </div>
        <div className='signUp_btns'>
          <Button
            text={
              postLoading ? (
                <Spin size='small' className='btn_spinner' />
              ) : (
                t("btns.save")
              )
            }
            link={false}
            to={""}
            type='submit'
            style={{
              width: "344px",
              background: "#dd264e",
              border: "none",
              color: "#fff",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
