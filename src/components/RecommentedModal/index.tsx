import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import SingleProjectBox from "../SingleProjectBox";
import Button from "../Button";
import { Select } from "antd";
import country_currency from "../../locales/country_currency.json";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { storageBase } from "../../utils/storage";
import { removeHtmlTags } from "../../globalFunctions/removeHtmlTags";
import { useTranslation } from "react-i18next";
import { openRecommentedModal } from "../../actions/donateAction";
import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import {
  donationSchema,
  otherSignUpSchema,
  recommendationSchema,
} from "../../Validation";
import countries from "../../locales/countries.json";
import country_dial from "../../locales/country_dial.json";
const { Option } = Select;

interface RecommentedModalProps {}

const RecommentedModal: React.FC<RecommentedModalProps> = ({}) => {
  const { t } = useTranslation();
  const { modalOpen } = useSelector((state: RootState) => state.expertProject);
  const dispatch = useDispatch();
  const filterOption = (
    input: string,
    option: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const filterOptionTel = (
    input: string,
    option: { label: string; value: string }
  ) => (option?.value ?? "").toLowerCase().includes(input.toLowerCase());

  const [telCode, setTelCode] = useState("");
  const handleTelCode = (val: string) => setTelCode(val);

  return (
    <Modal
      setOpenModal={() => dispatch(openRecommentedModal(false))}
      openModal={modalOpen}>
      <EcosystemModal
        onClose={() => dispatch(openRecommentedModal(false))}
        header={"рекомендация мудреца"}>
        <Formik
          validationSchema={recommendationSchema}
          initialValues={{
            name: "",
            last_name: "",
            email: "",
            country: "",
            phone: "",
            link: "",
            yourContact: "",
          }}
          onSubmit={values => {
            const result = {
              ...values,
              //   amount: `${summa}`,
            };
            // postRequest("login", values);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              noValidate
              onSubmit={handleSubmit}
              className='signUp_form donation_form'>
              <div className='recommendation_wrapper'>
                <div className='recommendation_1st'>
                  <div className='signUp_formGroup'>
                    <label htmlFor='recommendation_name'>
                      {t("inputs.name")}*
                    </label>
                    <input
                      type='text'
                      id='recommendation_name'
                      name='name'
                      className='signUp_input'
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <p className='error'>
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='recommendation_surname'>
                      {t("inputs.surname")}*
                    </label>
                    <input
                      type='text'
                      id='recommendation_surname'
                      name='last_name'
                      className='signUp_input'
                      value={values.last_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <p className='error'>
                      {errors.last_name &&
                        touched.last_name &&
                        errors.last_name}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='recommendation_country'>
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
                    <p className='error'>
                      {errors.country && touched.country && errors.country}
                    </p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='signUp_recommendation'>
                      {t("inputs.activities")}
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
                    <p className='error'></p>
                  </div>
                </div>
                <div className='recommendation_2nd'>
                  <div className='signUp_formGroup'>
                    <label htmlFor='recommendation_link'>
                      {t("sign-in.link")}
                    </label>
                    <input
                      type='text'
                      id='recommendation_link'
                      name='email'
                      className='signUp_input'
                      value={values.link}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <p className='error'></p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='recommendation_yourContact'>
                      {t("sign-in.your-contact")}
                    </label>
                    <input
                      type='text'
                      id='recommendation_yourContact'
                      name='email'
                      className='signUp_input'
                      value={values.yourContact}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <p className='error'></p>
                  </div>
                  <div className='signUp_formGroup'>
                    <label htmlFor='recommendation_email'>
                      {t("sign-in.email")}*
                    </label>
                    <input
                      type='text'
                      id='recommendation_email'
                      name='email'
                      className='signUp_input'
                      value={values.email}
                      onBlur={handleBlur}
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
                </div>
              </div>
              <div className='signUp_btns'>
                <Button
                  text={t("btns.recommended")}
                  link={false}
                  to={""}
                  type='submit'
                  style={{
                    width: "100%",
                    background: "#A3A3A3",
                    border: "none",
                    color: "#fff",
                  }}
                />
              </div>
            </form>
          )}
        </Formik>
      </EcosystemModal>
    </Modal>
  );
};

export default RecommentedModal;
