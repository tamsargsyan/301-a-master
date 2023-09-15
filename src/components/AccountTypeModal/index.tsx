import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import { Select, Checkbox, Popconfirm } from "antd";
import "./index.css";
import Button from "../Button";
import INFO_ICON from "../../assets/info-icon.svg";
import countries from "../../locales/countries.json";
import country_dial from "../../locales/country_dial.json";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const { Option } = Select;

interface AccountTypeModalProps {
  accountType: { open: boolean; id: number; name: string };
  setSignUp: (arg: boolean) => void;
  setAccountType: (arg: { open: boolean; id: number; name: string }) => void;
  setAgreementTerms: (arg: boolean) => void;
  setPrivacy: (arg: { modal: boolean; privacy: string }) => void;
}

const filterOption = (
  input: string,
  option: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const AccountTypeModal: React.FC<AccountTypeModalProps> = ({
  accountType,
  setSignUp,
  setAccountType,
  setAgreementTerms,
  setPrivacy,
}) => {
  const handleClose = () => {
    setSignUp(true);
    setAccountType({
      open: false,
      id: 0,
      name: "",
    });
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    setAgreementTerms(true);
    setAccountType({
      open: false,
      id: 0,
      name: "",
    });
  };

  const handlePrivacy = (privacy: string) => {
    setPrivacy({ modal: true, privacy });
    setAccountType({
      open: false,
      id: 0,
      name: "",
    });
  };

  console.log(country_dial);

  return (
    <Modal
      setOpenModal={handleClose}
      openModal={accountType.open}
      className='signUp_overlay'>
      <EcosystemModal
        onClose={handleClose}
        header={accountType.name}
        className='modal_back'>
        <form className='signUp_form'>
          <div className='signUp_formInputs'>
            <div className='signUp_form1st'>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_name'>Ваша имя*</label>
                <input
                  type='text'
                  id='signUp_name'
                  name='signUp'
                  className='signUp_input'
                />
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_surname'>Фамилия*</label>
                <input
                  type='text'
                  id='signUp_surname'
                  name='signUp'
                  className='signUp_input'
                />
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_oraganization'>Организация*</label>
                <input
                  type='text'
                  id='signUp_oraganization'
                  name='signUp'
                  className='signUp_input'
                />
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_country'>Страна проживания*</label>
                <Select
                  className='signUp_selector'
                  showSearch
                  placeholder='Select a country'
                  optionFilterProp='children'
                  onChange={onChange}
                  onSearch={onSearch}
                  //@ts-ignore
                  filterOption={filterOption}
                  options={countries}
                />
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_recommendation'>Рекомендация от*</label>
                <Select
                  className='signUp_selector'
                  showSearch
                  placeholder='Select a recommendation'
                  optionFilterProp='children'
                  onChange={onChange}
                  onSearch={onSearch}
                  //@ts-ignore
                  filterOption={filterOption}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </div>
              {accountType.id === 3 && (
                <div className='signUp_formGroup'>
                  <label htmlFor='signUp_recommendation'>
                    С кем из мудрецов 301 Вы бы хотели сотрудничать?*
                  </label>
                  <Select
                    className='signUp_selector'
                    showSearch
                    placeholder='Select a recommendation'
                    optionFilterProp='children'
                    onChange={onChange}
                    onSearch={onSearch}
                    //@ts-ignore
                    filterOption={filterOption}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                </div>
              )}
            </div>
            <div className='signUp_form2nd'>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_fund'>Откуда узнали про наш Фонд*</label>
                <Checkbox className='signUp_radio'>Соцсети</Checkbox>
                <Checkbox className='signUp_radio'>
                  Члены сообщества 301
                </Checkbox>
                <Checkbox className='signUp_radio'>другое</Checkbox>
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_project'>
                  Какое направление проектов Вам интересно
                </label>
                <Checkbox className='signUp_radio'>Все направления</Checkbox>
                <Checkbox className='signUp_radio'>Наука</Checkbox>
                <Checkbox className='signUp_radio'>Инновации</Checkbox>
                <Checkbox className='signUp_radio'>Культура</Checkbox>
                <Checkbox className='signUp_radio'>
                  Целостное развитие территорий
                </Checkbox>
                <Checkbox className='signUp_radio'>Образование</Checkbox>
              </div>
              {accountType.id === 3 && (
                <div className='signUp_formGroup'>
                  <label htmlFor='signUp_fund'>Форма участия*</label>
                  <Checkbox className='signUp_radio'>Консультации</Checkbox>
                  <Checkbox className='signUp_radio'>
                    Проектная деятельность
                  </Checkbox>
                  <Checkbox className='signUp_radio'>оба варианта</Checkbox>
                </div>
              )}
            </div>
            <div className='signUp_form3rd'>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_email'>Электронная почта*</label>
                <input
                  type='text'
                  id='signUp_email'
                  name='signUp'
                  className='signUp_input'
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
                    // options={country_dial}
                  >
                    {country_dial.map(country => (
                      <Option key={country.value} value={country.value}>
                        <div
                          className='custom-option'
                          style={{ display: "flex", gap: "6px" }}>
                          <span
                            className={`fi fi-${country.value.toLowerCase()}`}
                          />
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
                    />
                  </div>
                </div>
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_password'>Пароль*</label>
                <input
                  type='text'
                  id='signUp_password'
                  name='signUp'
                  className='signUp_input'
                />
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='signUp_repeatPassword'>Повторить пароль*</label>
                <input
                  type='text'
                  id='signUp_repeatPassword'
                  name='signUp'
                  className='signUp_input'
                />
              </div>
              <div className='signUp_formGroup terms_formGroup'>
                <div className='signUp_info'>
                  <Checkbox className='signUp_radio'>
                    Соглашение условий*
                  </Checkbox>
                  <Popconfirm
                    className='signUp_popover'
                    // title='Delete the task'
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    icon={false}
                    //@ts-ignore
                    onConfirm={confirm}
                    //@ts-ignore
                    // onCancel={cancel}
                    okText='more'
                    cancelText={false}>
                    <img src={INFO_ICON} alt='Info' />
                  </Popconfirm>
                </div>
                <div className='signUp_info'>
                  <Checkbox className='signUp_radio'>
                    КОДЕКС ЭТИКИ КЛУБА 301*
                  </Checkbox>
                  <img src={INFO_ICON} alt='Info' />
                </div>
                <div className='signUp_info'>
                  <Checkbox className='signUp_radio'>Форма поддержки</Checkbox>
                  <img src={INFO_ICON} alt='Info' />
                </div>
              </div>
            </div>
          </div>
          <div className='signUp_btns'>
            <Button
              text='ЗАРЕГИСТРИРОВАТЬСЯ'
              link={false}
              to={""}
              type='submit'
              style={{ background: "#A3A3A3", border: "none", color: "#fff" }}
            />
            <p>
              By continuing, you agree 301’s <br></br>
              <span
                className='mentioned_txt'
                onClick={() => handlePrivacy("Terms of Services")}>
                Terms of Services
              </span>{" "}
              and{" "}
              <span
                className='mentioned_txt'
                onClick={() => handlePrivacy("Privacy Policy")}>
                Privacy Policy
              </span>
            </p>
          </div>
        </form>
      </EcosystemModal>
    </Modal>
  );
};

export default AccountTypeModal;
