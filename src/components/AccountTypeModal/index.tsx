import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import { Select, Checkbox, Popconfirm, Spin, notification } from "antd";
import "./index.css";
import Button from "../Button";
import INFO_ICON from "../../assets/info-icon.svg";
import countries from "../../locales/countries.json";
import country_dial from "../../locales/country_dial.json";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useDispatch } from "react-redux";
import { openAccountTypeModal } from "../../actions/donateAction";
import { Formik, Field, ErrorMessage } from "formik";
import { signUpSchema } from "../../Validation";
import { useCallback, useEffect, useState } from "react";
import { usePostRequest } from "../../actions/apiActions";

const { Option } = Select;

interface AccountTypeModalProps {
  accountType: { open: boolean; id: number; name: string };
  setSignUp: (arg: boolean) => void;
  setAgreementTerms: (arg: boolean) => void;
  setPrivacy: (arg: { modal: boolean; privacy: string }) => void;
  handleClose: () => void;
  setModalName: (arg: string) => void;
}

const filterOption = (
  input: string,
  option: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const filterOptionTel = (
  input: string,
  option: { label: string; value: string }
) => (option?.value ?? "").toLowerCase().includes(input.toLowerCase());

const AccountTypeModal: React.FC<AccountTypeModalProps> = ({
  accountType,
  setAgreementTerms,
  setPrivacy,
  handleClose,
  setModalName,
}) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  const dispatch = useDispatch();
  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    setAgreementTerms(true);
    dispatch(
      openAccountTypeModal({
        open: false,
        id: 0,
        name: "",
      })
    );
  };

  const handlePrivacy = (privacy: string) => {
    setPrivacy({ modal: true, privacy });
    dispatch(
      openAccountTypeModal({
        open: false,
        id: 0,
        name: "",
      })
    );
    setModalName("accountTypeModal");
  };

  const [howDoYouKnow, setHowDoYouKnow] = useState<string>("");
  const handleHowDoYouKnowChange = (val: string) => setHowDoYouKnow(val);
  const handleCheckboxChange = (e: any, form: any) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let updatedProjectsInterested;

    if (isChecked) {
      updatedProjectsInterested = [...form.values.projects_interested, value];
    } else {
      updatedProjectsInterested = form.values.projects_interested.filter(
        (item: string) => item !== value
      );
    }

    form.setFieldValue("projects_interested", updatedProjectsInterested);
  };
  const [telCode, setTelCode] = useState("");
  const handleTelCode = (val: string) => setTelCode(val);

  const { postRequest, postLoading, response, error } = usePostRequest();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = useCallback(
    (message: string) => {
      api.open({
        message,
        description: false,
        duration: 0,
      });
    },
    [api]
  );
  console.log(telCode);

  useEffect(() => {
    if (response) {
      dispatch(
        openAccountTypeModal({
          open: false,
          id: 0,
          name: "",
        })
      );
      openNotification(response.data.message);
    }
    if (error) {
      openNotification(JSON.parse(error.response.data).email[0]);
    }
  }, [response, dispatch, error, openNotification]);

  return (
    <Modal
      setOpenModal={handleClose}
      openModal={accountType.open}
      className='signUp_overlay'>
      {contextHolder}
      <EcosystemModal
        onClose={handleClose}
        header={accountType.name}
        className='modal_back'>
        <Formik
          validationSchema={signUpSchema}
          initialValues={{
            name: "",
            last_name: "",
            email: "",
            phone: "",
            organization: "",
            how_did_you_know: "",
            projects_interested: [],
            recommendation_from: "",
            country: "",
            password: "",
            password_confirmation: "",
          }}
          onSubmit={values => {
            postRequest("register-user", values);
          }}>
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form noValidate onSubmit={handleSubmit} className='signUp_form'>
              <div className='signUp_formInputs'>
                <div className='signUp_form1st'>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_name'>Ваша имя*</label>
                    <input
                      type='text'
                      id='signUp_name'
                      name='name'
                      className='signUp_input'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <p className='error'>
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_surname'>Фамилия*</label>
                    <input
                      type='text'
                      id='signUp_surname'
                      name='last_name'
                      className='signUp_input'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                    />
                    <p className='error'>
                      {errors.last_name &&
                        touched.last_name &&
                        errors.last_name}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_oraganization'>Организация*</label>
                    <input
                      type='text'
                      id='signUp_oraganization'
                      name='organization'
                      className='signUp_input'
                      value={values.organization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className='error'>
                      {errors.organization &&
                        touched.organization &&
                        errors.organization}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_country'>Страна проживания*</label>
                    <Field name='country'>
                      {
                        //@ts-ignore
                        ({ _, form }) => (
                          <Select
                            // {...field}
                            showSearch
                            placeholder='Select a country'
                            optionFilterProp='children'
                            className='signUp_selector'
                            onChange={(_, obj: any) => {
                              form.setFieldValue("country", obj.label);
                            }}
                            onSearch={onSearch}
                            //@ts-ignore
                            filterOption={filterOption}
                            options={countries}
                          />
                        )
                      }
                    </Field>
                    <ErrorMessage
                      name='country'
                      component='p'
                      className='error'
                    />
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_recommendation'>
                      Рекомендация от*
                    </label>
                    <Field name='recommendation_from'>
                      {
                        //@ts-ignore
                        ({ _, form }) => (
                          <Select
                            // {...field}
                            showSearch
                            placeholder='Select a ...'
                            optionFilterProp='children'
                            className='signUp_selector'
                            onChange={(_, obj: any) => {
                              form.setFieldValue(
                                "recommendation_from",
                                obj.label
                              );
                            }}
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
                        )
                      }
                    </Field>
                    <ErrorMessage
                      name='recommendation_from'
                      component='p'
                      className='error'
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
                    <label htmlFor='signUp_fund'>
                      Откуда узнали про наш Фонд*
                    </label>
                    <Field name='how_did_you_know'>
                      {
                        //@ts-ignore
                        ({ _, form }) => (
                          <>
                            <Checkbox
                              className='signUp_radio'
                              value='Social network'
                              checked={howDoYouKnow === "Social network"}
                              onChange={e => {
                                handleHowDoYouKnowChange(e.target.value);
                                form.setFieldValue(
                                  "how_did_you_know",
                                  e.target.value
                                );
                              }}>
                              Соцсети
                            </Checkbox>
                            <Checkbox
                              value='Community Members 301'
                              checked={howDoYouKnow === "Community Members 301"}
                              className='signUp_radio'
                              onChange={e => {
                                handleHowDoYouKnowChange(e.target.value);
                                form.setFieldValue(
                                  "how_did_you_know",
                                  e.target.value
                                );
                              }}>
                              Члены сообщества 301
                            </Checkbox>
                            <Checkbox
                              value='other'
                              checked={howDoYouKnow === "other"}
                              className='signUp_radio'
                              onChange={e => {
                                handleHowDoYouKnowChange(e.target.value);
                                // form.setFieldValue(
                                //   "how_did_you_know",
                                //   e.target.value
                                // );
                              }}>
                              другое
                            </Checkbox>
                            {howDoYouKnow === "other" ? (
                              <input
                                type='text'
                                id='signUp_howDoYouKnow'
                                placeholder='Enter URL'
                                name='how_did_you_know'
                                className='signUp_input howDoYouKnow_other'
                                value={values.how_did_you_know}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            ) : null}
                          </>
                        )
                      }
                    </Field>
                    <ErrorMessage
                      name='how_did_you_know'
                      component='p'
                      className='error'
                    />
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_project'>
                      Какое направление проектов Вам интересно
                    </label>
                    <Checkbox className='signUp_radio'>Образование</Checkbox>
                    <Field name='projects_interested'>
                      {
                        //@ts-ignore
                        ({ _, form }) => (
                          <>
                            <Checkbox
                              className='signUp_radio'
                              value='All directions'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              Все направления
                            </Checkbox>
                            <Checkbox
                              value='The science'
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              Наука
                            </Checkbox>
                            <Checkbox
                              value='Innovation'
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              Инновации
                            </Checkbox>
                            <Checkbox
                              value='Culture'
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              Культура
                            </Checkbox>
                            <Checkbox
                              value='Holistic development of territories'
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              Целостное развитие территорий
                            </Checkbox>
                          </>
                        )
                      }
                    </Field>
                    <ErrorMessage
                      name='projects_interested'
                      component='p'
                      className='error'
                    />
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
                      name='email'
                      className='signUp_input'
                      value={values.email}
                      onChange={handleChange}
                    />
                    <p className='error'>
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_tel'>Телефон</label>
                    <div className='signUp_tel'>
                      <Select
                        className='signUp_selector'
                        showSearch
                        placeholder='Select a tel'
                        optionFilterProp='children'
                        onChange={handleTelCode}
                        onSearch={onSearch}
                        //@ts-ignore
                        filterOption={filterOptionTel}
                        // options={country_dial}
                      >
                        {country_dial.map(country => (
                          <Option key={country.value} value={country.label}>
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
                          name='phone'
                          id='signUp_tel'
                          className='signUp_input'
                          value={values.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <p className='error'>
                      {errors.phone && touched.phone && errors.phone}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_password'>Пароль*</label>
                    <input
                      type='text'
                      id='signUp_password'
                      name='password'
                      className='signUp_input'
                      value={values.password}
                      onChange={handleChange}
                    />
                    <p className='error'>
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_repeatPassword'>
                      Повторить пароль*
                    </label>
                    <input
                      type='text'
                      id='signUp_repeatPassword'
                      name='password_confirmation'
                      className='signUp_input'
                      value={values.password_confirmation}
                      onChange={handleChange}
                    />
                    <p className='error'>
                      {errors.password_confirmation &&
                        touched.password_confirmation &&
                        errors.password_confirmation}
                    </p>
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
                      <Checkbox className='signUp_radio'>
                        Форма поддержки
                      </Checkbox>
                      <img src={INFO_ICON} alt='Info' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='signUp_btns'>
                <Button
                  text={
                    postLoading ? (
                      <Spin size='small' className='btn_spinner' />
                    ) : (
                      "ЗАРЕГИСТРИРОВАТЬСЯ"
                    )
                  }
                  link={false}
                  to={""}
                  type='submit'
                  style={{
                    background: isValid ? "#dd264e" : "#A3A3A3",
                    border: "none",
                    color: "#fff",
                  }}
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
          )}
        </Formik>
      </EcosystemModal>
    </Modal>
  );
};

export default AccountTypeModal;
