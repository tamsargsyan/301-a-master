import { useEffect, useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import FB from "../../assets/logo/fb.svg";
import GMAIL from "../../assets/logo/gmail.svg";
import PATTERN_1 from "../../assets/patterns/login-small.svg";
import PATTERN_2 from "../../assets/patterns/login-big.svg";
import { signInSchema } from "../../Validation";
import { Formik } from "formik";
import "./index.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

interface SignInProps {
  signIn: boolean;
  setSignIn: (arg: boolean) => void;
  setSignUp: (arg: boolean) => void;
  setPrivacy: any;
  setModalName: (arg: string) => void;
}

const SignIn: React.FC<SignInProps> = ({
  signIn,
  setSignIn,
  setSignUp,
  setPrivacy,
  setModalName,
}) => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const handleForgetPassword = () => {
    setForgetPassword(true);
  };

  useEffect(() => {
    !signIn && setForgetPassword(false);
  }, [signIn]);

  const handlePrivacy = (privacy: string) => {
    setPrivacy({ modal: true, privacy });
    setSignIn(false);
    setModalName("signInModal");
  };

  const windowSize = useWindowSize();
  const { t } = useTranslation();

  return (
    <Modal setOpenModal={setSignIn} openModal={signIn}>
      <div className='modal_signIn'>
        {windowSize.width > 600 && (
          <div className='modal_signIn_leftSide'>
            <img src={PATTERN_1} alt='Pattern' />
            <img src={PATTERN_2} alt='Pattern' />
            <img src={PATTERN_1} alt='Pattern' />
          </div>
        )}
        <div className='modal_signIn_rightSide'>
          <div
            className={`${
              forgetPassword && "modal_signIn_title_forgetPass"
            } modal_signIn_title`}>
            <p>
              {forgetPassword
                ? t("forget-pass.forget-pass")
                : t("sign-in.welcome")}
            </p>
            {forgetPassword && (
              <p className='forgetPass_desc'>
                Please, enter your email and we will send you a link to reset a
                password.
              </p>
            )}
          </div>
          <Formik
            validationSchema={signInSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={values => {
              alert(JSON.stringify(values));
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form noValidate onSubmit={handleSubmit} className='signIn_form'>
                <div className='signIn_formFields'>
                  <input
                    placeholder={t("sign-in.email")}
                    type='email'
                    name='email'
                    id='email'
                    className='form'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p className='error'>
                    {errors.email && touched.email && errors.email}
                  </p>
                  {!forgetPassword && (
                    <>
                      <input
                        placeholder={t("sign-in.pass")}
                        type='password'
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className='form'
                      />
                      <p className='error'>
                        {errors.password && touched.password && errors.password}
                      </p>
                    </>
                  )}
                </div>
                {!forgetPassword && (
                  <div className='forgetPassword'>
                    <button onClick={handleForgetPassword}>
                      {t("sign-in.forget-pass")}
                    </button>
                  </div>
                )}
                <Button
                  text={
                    forgetPassword ? t("forget-pass.send") : t("navbar.sign-in")
                  }
                  link={true}
                  to='/301/personal/personal-info'
                  style={{
                    background: "#DD264E",
                    color: "#fff",
                    width: "100%",
                  }}
                  type='submit'
                  className='signIn-btn'
                  onClick={() => setSignIn(false)}
                />
              </form>
            )}
          </Formik>
          {!forgetPassword ? (
            <div className='signIn_another'>
              <div className='signIn_another_title'>
                <div className='line'></div>
                <p>{t("sign-in.login-with")}</p>
                <div className='line'></div>
              </div>
              <div className='signIn_another_icons'>
                <a href='gmail.com'>
                  <img src={GMAIL} alt='Gmail' />
                </a>
                <a href='gmail.com'>
                  <img src={FB} alt='Facebook' />
                </a>
              </div>
              <div className='signIn_another_privacy'>
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
              </div>
            </div>
          ) : (
            <div
              className={`${
                forgetPassword && "signIn_another_privacy_forgetPass"
              } signIn_another_privacy`}>
              <p>
                {t("forget-pass.need-help")}
                <span className='mentioned_txt'>
                  {t("forget-pass.support")}
                </span>
              </p>
            </div>
          )}
          <div className='signIn_signUp'>
            <p>
              {t("sign-in.notHavingAcc")}
              <button className='mentioned_txt' onClick={() => setSignUp(true)}>
                {t("sign-in.sign-up")}
              </button>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignIn;
