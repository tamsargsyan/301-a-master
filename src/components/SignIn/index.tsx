import { useEffect, useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import FB from "../../assets/logo/fb.svg";
import GMAIL from "../../assets/logo/gmail.svg";
import PATTERN_1 from "../../assets/patterns/login-small.svg";
import PATTERN_2 from "../../assets/patterns/login-big.svg";
import {
  changePassSchema,
  forgetPassShcema,
  signInSchema,
} from "../../Validation";
import { Formik } from "formik";
import "./index.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";
import { fetchingGmail, usePostRequest } from "../../actions/apiActions";
import { Spin } from "antd";
import { connect, useDispatch } from "react-redux";
import { login } from "../../actions/authActions";
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import CHECK_EMAIL_ICON from "../../assets/checkEmailIcon.svg";
import { history } from "../Navbar";
import Terms from "../Terms";
import cookies from "js-cookie";

const SignIn = () => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const handleForgetPassword = () => setForgetPassword(true);
  const navigate = useNavigate();
  const lang = cookies.get("i18next");

  const windowSize = useWindowSize();
  const { t } = useTranslation();
  const { postRequest, postLoading, response } = usePostRequest();

  const [hasNavigated, setHasNavigated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (response && response.status === 200) {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(login());
      setHasNavigated(true);
      !hasNavigated && navigate(`/${lang}/`);
    }
  }, [response, dispatch, navigate, hasNavigated, lang]);

  const [searchParams] = useSearchParams();
  const resetPass = searchParams.get("resetPass");
  const signInState = () => {
    if (forgetPassword) return forgetPassShcema;
    else if (resetPass) return changePassSchema;
    else return signInSchema;
  };
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlSearchParams.get("token");

    if (tokenFromUrl) {
      setToken(tokenFromUrl);

      urlSearchParams.delete("token");
      const newSearch = urlSearchParams.toString();

      history.replace({
        pathname: window.location.pathname,
        search: newSearch,
      });
    }
  }, []);

  return (
    <>
      <Modal
        setOpenModal={() => navigate(-1)}
        openModal={true}
        headerShow={true}>
        <div className='modal_signIn'>
          {windowSize.width > 600 && (
            <div className='modal_signIn_leftSide'>
              <img
                src={PATTERN_1}
                alt='Pattern'
                decoding='async'
                loading='lazy'
              />
              <img
                src={PATTERN_2}
                alt='Pattern'
                decoding='async'
                loading='lazy'
              />
              <img
                src={PATTERN_1}
                alt='Pattern'
                decoding='async'
                loading='lazy'
              />
            </div>
          )}
          <div className='modal_signIn_rightSide'>
            <div
              className={`${
                forgetPassword && "modal_signIn_title_forgetPass"
              } modal_signIn_title`}>
              <p>
                {forgetPassword
                  ? response?.status === 201
                    ? t("forget-pass.check-email")
                    : t("forget-pass.forget-pass")
                  : t("sign-in.welcome")}
              </p>
              {forgetPassword && (
                <p className='forgetPass_desc'>
                  {response?.status === 201
                    ? t("forget-pass.sent-email")
                    : t("forget-pass.enter-email")}
                </p>
              )}
            </div>
            {forgetPassword && response?.status === 201 ? (
              <div className='checkEmail_icon'>
                <img
                  src={CHECK_EMAIL_ICON}
                  alt='Check Email'
                  decoding='async'
                  loading='lazy'
                />
              </div>
            ) : (
              <Formik
                validationSchema={signInState()}
                initialValues={{
                  email: "",
                  password: "",
                  password_confirmation: "",
                }}
                onSubmit={values => {
                  if (forgetPassword) {
                    postRequest(
                      "reset-password-request",
                      { email: values.email },
                      {}
                    );
                  } else if (resetPass) {
                    postRequest(
                      "change-password",
                      {
                        token,
                        password: values.password,
                        password_confirmation: values.password_confirmation,
                      },
                      {}
                    );
                  } else {
                    postRequest("login", values, {});
                  }
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
                    className='signIn_form'>
                    <div className='signIn_formFields'>
                      {!resetPass && (
                        <>
                          <input
                            placeholder={t("sign-in.email")}
                            type='email'
                            name='email'
                            className='form'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <p className='error'>
                            {errors.email && touched.email && errors.email}
                          </p>
                        </>
                      )}
                      {(!forgetPassword || resetPass) && (
                        <>
                          <input
                            placeholder={t("inputs.password")}
                            type='password'
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className='form'
                          />
                          <p className='error'>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </p>
                        </>
                      )}
                      {resetPass && (
                        <>
                          <input
                            placeholder={t("inputs.password_confirmation")}
                            type='password'
                            name='password_confirmation'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password_confirmation}
                            className='form'
                          />
                          <p className='error'>
                            {errors.password_confirmation &&
                              touched.password_confirmation &&
                              errors.password_confirmation}
                          </p>
                        </>
                      )}
                    </div>
                    {response?.error && (
                      <p className='error'>{response.error}</p>
                    )}
                    {!forgetPassword && !resetPass && (
                      <div className='forgetPassword'>
                        <button onClick={handleForgetPassword} type='button'>
                          {t("sign-in.forget-pass")}
                        </button>
                      </div>
                    )}
                    <Button
                      text={
                        postLoading ? (
                          <Spin size='small' className='btn_spinner' />
                        ) : forgetPassword ? (
                          t("forget-pass.send")
                        ) : (
                          t("navbar.sign-in")
                        )
                      }
                      link={false}
                      to=''
                      style={{
                        background: "#DD264E",
                        color: "#fff",
                        width: "100%",
                      }}
                      type='submit'
                      className='signIn-btn'
                    />
                  </form>
                )}
              </Formik>
            )}
            {!forgetPassword && !resetPass ? (
              <div className='signIn_another'>
                <div className='signIn_another_title'>
                  <div className='line'></div>
                  <p>{t("sign-in.login-with")}</p>
                  <div className='line'></div>
                </div>
                <div className='signIn_another_icons'>
                  <a
                    href='https://301.machtech.site/api/auth/google'
                    onClick={e => {
                      e.preventDefault();
                      //@ts-ignore
                      dispatch(fetchingGmail("auth/google"));
                    }}>
                    <img
                      src={GMAIL}
                      alt='Gmail'
                      decoding='async'
                      loading='lazy'
                    />
                  </a>
                  <a href='https://301.machtech.site/api/auth/facebook'>
                    <img
                      src={FB}
                      alt='Facebook'
                      decoding='async'
                      loading='lazy'
                    />
                  </a>
                </div>
                <Terms aboutUs={false} />
              </div>
            ) : forgetPassword && response?.status === 201 ? null : (
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
                {forgetPassword && response?.status ? (
                  <>
                    {t("forget-pass.back-to")}
                    <button
                      className='mentioned_txt'
                      onClick={() => setForgetPassword(false)}>
                      {t("navbar.sign-in")}
                    </button>
                  </>
                ) : (
                  <>
                    {t("sign-in.notHavingAcc")}
                    <NavLink
                      className='mentioned_txt'
                      to={`/${lang}/signUp`}
                      // onClick={() => setSignUp(true)}
                    >
                      {t("sign-in.sign-up")}
                    </NavLink>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(SignIn);
