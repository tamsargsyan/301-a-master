import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import { Select, Checkbox, Popconfirm, Spin, notification } from "antd";
import "./index.css";
import Button from "../Button";
import INFO_ICON from "../../assets/info-icon.svg";
import countries from "../../locales/countries.json";
import country_dial from "../../locales/country_dial.json";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useDispatch, useSelector } from "react-redux";
import { openAccountTypeModal } from "../../actions/donateAction";
import { Formik, Field, ErrorMessage } from "formik";
import { otherSignUpSchema, signUpSchema } from "../../Validation";
import { useEffect, useState } from "react";
import { fetchingRegisterData, usePostRequest } from "../../actions/apiActions";
import { useTranslation } from "react-i18next";
import { RootState } from "../../store/configureStore";
import { congratsModal } from "../../actions/congratsAction";
import {
  getAgreementTerms,
  getModalName,
  openPrivacyPolicy,
} from "../../actions/privacyPolicyAction";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const { Option } = Select;

const filterOption = (
  input: string,
  option: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const filterOptionTel = (
  input: string,
  option: { label: string; value: string }
) => (option?.value ?? "").toLowerCase().includes(input.toLowerCase());

const filterOptionSages = (input: string, option: any) =>
  (option?.value ?? "").toLowerCase().includes(input.toLowerCase());

const AccountTypeModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const confirmAgreementTerms = () => {
    dispatch(
      getAgreementTerms(true, t("checkboxes.agreement_terms"), "sign_up")
    );
    dispatch(
      openAccountTypeModal({
        open: false,
        id: 0,
        name: "",
        type: "",
      })
    );
  };
  const confirmClubCodeEthics = () => {
    dispatch(
      getAgreementTerms(
        true,
        t("checkboxes.club_code_of_ethics_301"),
        "sign_up"
      )
    );
    dispatch(
      openAccountTypeModal({
        open: false,
        id: 0,
        name: "",
        type: "",
      })
    );
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
  const [participation_form, setParticipation_form] = useState("");
  const [telCode, setTelCode] = useState("");
  const handleTelCode = (val: string) => setTelCode(val);

  const { postRequest, postLoading, response, error } = usePostRequest();

  useEffect(() => {
    if (response) {
      dispatch(
        openAccountTypeModal({
          open: false,
          id: 0,
          name: "",
          type: "",
        })
      );
      dispatch(congratsModal(true, t("congrats.register")));
    }
  }, [response, dispatch, error]);

  const { data } = useSelector((state: RootState) => state.registerData);
  const [agreementTermsChecked, setAgreementTearmsChecked] = useState(false);
  const [clubCodeOfEthics301Checked, setClubCodeOfEthics301Checked] =
    useState(false);
  const [supportFormChecked, setSupportFormChecked] = useState(false);

  const location = useLocation();
  const showAccountType = location.pathname === "/accountType";
  const id = +location.search?.split("?")[1]?.split("=")[1];
  const type = location.search?.split("?")[2]?.split("=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    //@ts-ignore
    id === 3 && dispatch(fetchingRegisterData("get-register-data"));
  }, [id, dispatch]);

  return (
    <Modal
      setOpenModal={() => navigate(-1)}
      openModal={showAccountType}
      className='signUp_overlay'
      headerShow={false}>
      <EcosystemModal
        onClose={() => navigate(-1)}
        header={t(`footer.ecosystem.${type}`)}
        className='modal_back'>
        <Formik
          validationSchema={id === 3 ? otherSignUpSchema : signUpSchema}
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
            participation_form: "",
            sages_id: "",
          }}
          onSubmit={values => {
            const completePhoneNumber = `${telCode} ${values.phone}`;
            const result = {
              ...values,
              phone: completePhoneNumber,
              type: type,
              agreement_terms: agreementTermsChecked,
              club_code_of_ethics_301: clubCodeOfEthics301Checked,
              support_form: supportFormChecked,
            };
            postRequest("register-user", result, {});
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
                    <label htmlFor='signUp_name'>{t("inputs.name")}*</label>
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
                    <label htmlFor='signUp_surname'>
                      {t("inputs.surname")}*
                    </label>
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
                    <label htmlFor='signUp_oraganization'>
                      {t("inputs.organization")}*
                    </label>
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
                    <label htmlFor='signUp_country'>
                      {t("inputs.country")}*
                    </label>
                    <Field name='country'>
                      {
                        //@ts-ignore
                        ({ _, form }) => (
                          <Select
                            // {...field}
                            showSearch
                            optionFilterProp='children'
                            className='signUp_selector'
                            onChange={(_, obj: any) => {
                              form.setFieldValue("country", obj.label);
                            }}
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
                      {t("inputs.recommendation")}*
                    </label>
                    <Field name='recommendation_from'>
                      {
                        //@ts-ignore
                        ({ _, form }) => (
                          <Select
                            // {...field}
                            showSearch
                            optionFilterProp='children'
                            className='signUp_selector'
                            onChange={(_, obj: any) => {
                              form.setFieldValue(
                                "recommendation_from",
                                obj.label
                              );
                            }}
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
                  {type === "experts" && (
                    <div className='signUp_formGroup'>
                      <label htmlFor='signUp_sages'>{t("which_sages")}*</label>
                      <Field name='sages_id'>
                        {
                          //@ts-ignore
                          ({ _, form }) => (
                            <Select
                              className='signUp_selector'
                              showSearch
                              optionFilterProp='children'
                              onChange={(_, obj: any) => {
                                form.setFieldValue("sages_id", obj.key);
                              }}
                              //@ts-ignore
                              filterOption={filterOptionSages}>
                              {data?.sages.map((sage: any) => (
                                <Option
                                  key={sage.id}
                                  value={`${sage.name}${sage.last_name}`}>
                                  {`${sage.name}${sage.last_name}`}
                                </Option>
                              ))}
                            </Select>
                          )
                        }
                      </Field>
                      <p className='error'>
                        {errors.sages_id && touched.sages_id && errors.sages_id}
                      </p>
                      {/* <ErrorMessage
                        name='sages_id'
                        component='p'
                        className='error'
                      /> */}
                    </div>
                  )}
                </div>
                <div className='signUp_form2nd'>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_fund'>
                      {t("inputs.how_did_you_know")}*
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
                              {t("checkboxes.social_network")}
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
                              {t("checkboxes.community_members_301")}
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
                              {t("checkboxes.other")}
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
                      {t("inputs.projects_interested")}
                    </label>
                    <Field name='projects_interested'>
                      {
                        //@ts-ignore
                        ({ _, form }) => (
                          <>
                            <Checkbox
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              {t("checkboxes.education")}
                            </Checkbox>
                            <Checkbox
                              className='signUp_radio'
                              value='All directions'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              {t("checkboxes.all_directions")}
                            </Checkbox>
                            <Checkbox
                              value='The science'
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              {t("checkboxes.science")}
                            </Checkbox>
                            <Checkbox
                              value='Innovation'
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              {t("checkboxes.innovation")}
                            </Checkbox>
                            <Checkbox
                              value='Culture'
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              {t("checkboxes.culture")}
                            </Checkbox>
                            <Checkbox
                              value='Holistic development of territories'
                              className='signUp_radio'
                              onChange={e => {
                                handleCheckboxChange(e, form);
                              }}>
                              {t("checkboxes.territories")}
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
                  {id === 3 && (
                    <div className='signUp_formGroup'>
                      <label htmlFor='signUp_fund'>
                        {t("inputs.participation_form")}*
                      </label>
                      <Field name='participation_form'>
                        {
                          //@ts-ignore
                          ({ _, form }) => (
                            <>
                              <Checkbox
                                value='Consultations'
                                checked={participation_form === "Consultations"}
                                className='signUp_radio'
                                onChange={e => {
                                  setParticipation_form(e.target.value);
                                  form.setFieldValue(
                                    "participation_form",
                                    e.target.value
                                  );
                                }}>
                                {t("checkboxes.consultations")}
                              </Checkbox>
                              <Checkbox
                                value='Project activities'
                                checked={
                                  participation_form === "Project activities"
                                }
                                className='signUp_radio'
                                onChange={e => {
                                  setParticipation_form(e.target.value);
                                  form.setFieldValue(
                                    "participation_form",
                                    e.target.value
                                  );
                                }}>
                                {t("checkboxes.project_activities")}
                              </Checkbox>
                              <Checkbox
                                value='both options'
                                checked={participation_form === "both options"}
                                className='signUp_radio'
                                onChange={e => {
                                  setParticipation_form(e.target.value);
                                  form.setFieldValue(
                                    "participation_form",
                                    e.target.value
                                  );
                                }}>
                                {t("checkboxes.both_options")}
                              </Checkbox>
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
                  )}
                </div>
                <div className='signUp_form3rd'>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_email'>{t("sign-in.email")}*</label>
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
                    <label htmlFor='signUp_tel'>{t("inputs.phone")}</label>
                    <div className='signUp_tel'>
                      <Select
                        className='signUp_selector'
                        showSearch
                        placeholder={t("inputs.choose")}
                        optionFilterProp='children'
                        onChange={handleTelCode}
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
                    <label htmlFor='signUp_password'>
                      {t("inputs.password")}*
                    </label>
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
                      {t("inputs.password_confirmation")}*
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
                      <Checkbox
                        className='signUp_radio'
                        checked={agreementTermsChecked}
                        onChange={e =>
                          setAgreementTearmsChecked(e.target.checked)
                        }>
                        {t("checkboxes.agreement_terms")}*
                      </Checkbox>
                      <Popconfirm
                        className='signUp_popover'
                        icon={false}
                        description={
                          <span>
                            КОДЕКС ЭТИКИ КЛУБА 301
                            <br />
                            Уважаемые Члены Клуба 301, пожалуйста, внимательно
                            ознакомьтесь с правилами Клуба 301! Как
                            действительный член Клуба 301 («Член Клуба»), Вы
                            принимаете Кодекс Этики  Клуба 301 и обязуетесь
                            соблюдать Правила клуба 301 (в дальнейшем
                            “Правила”).
                          </span>
                        }
                        //@ts-ignore
                        onConfirm={confirmAgreementTerms}
                        //@ts-ignore
                        // onCancel={cancel}
                        okText='more'
                        cancelText={""}
                        title={undefined}>
                        <img src={INFO_ICON} alt='Info' />
                      </Popconfirm>
                    </div>
                    <div className='signUp_info'>
                      <Checkbox
                        className='signUp_radio'
                        checked={clubCodeOfEthics301Checked}
                        onChange={e =>
                          setClubCodeOfEthics301Checked(e.target.checked)
                        }>
                        {t("checkboxes.club_code_of_ethics_301")}*
                      </Checkbox>
                      <Popconfirm
                        className='signUp_popover'
                        description={
                          <span>
                            КОДЕКС ЭТИКИ КЛУБА 301
                            <br />
                            Уважаемые Члены Клуба 301, пожалуйста, внимательно
                            ознакомьтесь с правилами Клуба 301! Как
                            действительный член Клуба 301 («Член Клуба»), Вы
                            принимаете Кодекс Этики  Клуба 301 и обязуетесь
                            соблюдать Правила клуба 301 (в дальнейшем
                            “Правила”).
                          </span>
                        }
                        icon={false}
                        //@ts-ignore
                        onConfirm={confirmClubCodeEthics}
                        //@ts-ignore
                        okText='more'
                        cancelText={""}
                        title={undefined}>
                        <img src={INFO_ICON} alt='Info' />
                      </Popconfirm>
                    </div>
                    <div className='signUp_info'>
                      <Checkbox
                        className='signUp_radio'
                        checked={supportFormChecked}
                        onChange={e => setSupportFormChecked(e.target.checked)}>
                        {t("checkboxes.support_form")}
                      </Checkbox>
                      <Popconfirm
                        className='signUp_popover popover_support_from'
                        description={
                          <div className='support_popover'>
                            <div className='support_popover-list-item'>
                              <div className='support_popover-list-circle'></div>
                              <div
                                className='support_popover-list-text'
                                dangerouslySetInnerHTML={{
                                  __html: t("privacy.support_popover_1"),
                                }}
                              />
                            </div>
                            <div className='support_popover-list-item'>
                              <div className='support_popover-list-circle'></div>
                              <div
                                className='support_popover-list-text'
                                dangerouslySetInnerHTML={{
                                  __html: t("privacy.support_popover_2"),
                                }}
                              />
                            </div>
                          </div>
                        }
                        icon={false}
                        okText={""}
                        cancelText={""}
                        title={undefined}>
                        <img src={INFO_ICON} alt='Info' />
                      </Popconfirm>
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
                      t("btns.register")
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
                  className='donation_btn'
                />
                <p>
                  {t("privacy.1")}
                  <br></br>
                  <NavLink className='mentioned_txt' to='/terms-of-services'>
                    {t("privacy.terms")}
                  </NavLink>{" "}
                  {t("privacy.and")}{" "}
                  <NavLink className='mentioned_txt' to='/privacy-policy'>
                    {t("privacy.privacy")}
                  </NavLink>
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
