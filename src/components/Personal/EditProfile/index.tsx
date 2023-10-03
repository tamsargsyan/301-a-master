import { Select } from "antd";
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
const { Option } = Select;

const EditProfile = () => {
  const { t } = useTranslation();
  // const handleSubmit = () => {
  //   console.log("submit");
  // };
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption = (
    input: string,
    option: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div className='personalInfo_wrapper'>
      <p className='personalInfo_title'>Edit profile</p>
      <form className='personal_form'>
        <div className='prof_pic'>
          <div>
            <div className='signUp_formGroup'>
              <label htmlFor='personal_name'>Ваша имя</label>
              <input
                type='text'
                id='personal_name'
                name='signUp'
                className='signUp_input'
                value='Peter'
              />
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='personal_surname'>Фамилия</label>
              <input
                type='text'
                id='personal_surname'
                name='signUp'
                className='signUp_input'
                value='Nemoy'
              />
            </div>
          </div>
          <div className='pic'>
            <img src={PROF_PIC} alt='Profile' />
            <p>
              <img src={CLOUD} alt='Cloud' />
              Replace
            </p>
          </div>
        </div>
        <div className='signUp_formGroup signUp_textareaGroup'>
          <label htmlFor='personal_about'>About me</label>
          <textarea
            id='personal_about'
            name='message'
            placeholder={t("contact.write")}
            // rows={7}
            // cols={60}
            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
            // onChange={handleChange}
            required
            className='signUp_textarea'
          />
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='signUp_tel'>Телефон</label>
          <div className='signUp_tel'>
            <Select
              className='signUp_selector'
              showSearch
              placeholder='Select a tel'
              optionFilterProp='children'
              onChange={onChange}
              onSearch={onSearch}
              //@ts-ignore
              filterOption={filterOption}
              defaultValue='+374'
              // options={country_dial}
            >
              {country_dial.map(country => (
                <Option key={country.value} value={country.value}>
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
                id='signUp_tel'
                name='signUp'
                className='signUp_input'
                value='41635625'
              />
            </div>
          </div>
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_email'>Электронная почта</label>
          <input
            type='text'
            id='personal_email'
            name='signUp'
            className='signUp_input'
            value='annabraun@gmail.com'
          />
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_pass'>Текущий пароль</label>
          <input
            type='text'
            id='personal_pass'
            name='signUp'
            className='signUp_input'
            value='daa444%jj55'
          />
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_newPass'>Новый пароль</label>
          <input
            type='text'
            id='personal_newPass'
            name='signUp'
            className='signUp_input'
            value='daa444%jj55'
          />
        </div>
        <div className='signUp_formGroup'>
          <label htmlFor='personal_repeatPass'>Повторить пароль</label>
          <input
            type='text'
            id='personal_repeatPass'
            name='signUp'
            className='signUp_input'
            value='daa444%jj55'
          />
        </div>
        <p className='onTheWeb'>ON THE WEB</p>
        <div className='personal_add_socialMedias'>
          <p className='onTheWeb'>Social media</p>
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
                text='Add'
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
            text='Save'
            link={false}
            to={""}
            type='submit'
            style={{
              width: "344px",
              background: "#A3A3A3",
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
