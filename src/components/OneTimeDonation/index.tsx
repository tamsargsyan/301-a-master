import { Select } from "antd";
import EcosystemModal from "../EcosystemModal";
import Modal from "../Modal";
import "./index.css";
import Button from "../Button";
import country_currency from "../../locales/country_currency.json";
import { useTranslation } from "react-i18next";
import { donationSchema } from "../../Validation";
import { Formik } from "formik";
import { useState } from "react";

interface OneTimeDonationProps {
  oneTimeDonation: boolean;
  handleClose: () => void;
  setModalName: (arg: string) => void;
  setPrivacy: any;
  setOneTimeDonation: (arg: boolean) => void;
}

const OneTimeDonation: React.FC<OneTimeDonationProps> = ({
  oneTimeDonation,
  handleClose,
  setModalName,
  setPrivacy,
  setOneTimeDonation,
}) => {
  const filterOption = (
    input: string,
    option: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handlePrivacy = (privacy: string) => {
    setPrivacy({ modal: true, privacy });
    setOneTimeDonation(false);
    setModalName("oneTimeDonation");
  };
  const { t } = useTranslation();
  const [summa, setSumma] = useState("");

  return (
    <Modal setOpenModal={handleClose} openModal={oneTimeDonation}>
      <EcosystemModal
        onClose={handleClose}
        header={t("btns.one-time-donation")}>
        <Formik
          validationSchema={donationSchema}
          initialValues={{ name: "", last_name: "", email: "", amount: "" }}
          onSubmit={values => {
            const result = {
              ...values,
              amount: `${summa}`,
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
              <div className='signUp_formGroup'>
                <label htmlFor='oneTimeDonation_sum'>
                  {t("inputs.enter-donation-amount")}
                </label>
                <div className='signUp_tel'>
                  <Select
                    // {...field}
                    showSearch
                    optionFilterProp='children'
                    className='signUp_selector'
                    onChange={(_, obj: any) => setSumma(obj.value)}
                    //@ts-ignore
                    filterOption={filterOption}
                    placeholder={t("inputs.choose")}
                    options={country_currency}
                  />
                  <div className='signUp_telWrapper'>
                    <input
                      type='number'
                      id='oneTimeDonation_sum'
                      name='amount'
                      className='signUp_input'
                      placeholder='0'
                      value={values.amount}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <p className='error'>
                  {errors.amount && touched.amount && !summa && errors.amount}
                </p>
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='oneTimeDonation_name'>{t("inputs.name")}</label>
                <input
                  type='text'
                  id='oneTimeDonation_name'
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
                <label htmlFor='oneTimeDonation_surname'>
                  {t("inputs.surname")}
                </label>
                <input
                  type='text'
                  id='oneTimeDonation_surname'
                  name='last_name'
                  className='signUp_input'
                  value={values.last_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p className='error'>
                  {errors.last_name && touched.last_name && errors.last_name}
                </p>
              </div>
              <div className='signUp_formGroup'>
                <label htmlFor='oneTimeDonation_email'>
                  {t("sign-in.email")}
                </label>
                <input
                  type='text'
                  id='oneTimeDonation_email'
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
              <div className='signUp_btns'>
                <p>
                  {t("privacy.1")}
                  <br></br>
                  <button
                    className='mentioned_txt'
                    onClick={() => handlePrivacy("Terms of Services")}>
                    {t("privacy.terms")}
                  </button>
                  {t("privacy.and")}
                  <button
                    className='mentioned_txt'
                    onClick={() => handlePrivacy("Privacy Policy")}>
                    {t("privacy.privacy")}
                  </button>
                </p>
                <Button
                  text={t("btns.donate")}
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
        {/* </div> */}
      </EcosystemModal>
    </Modal>
  );
};

export default OneTimeDonation;
