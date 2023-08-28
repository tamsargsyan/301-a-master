import { useEffect, useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import FB from "../../assets/logo/fb.svg";
import GMAIL from "../../assets/logo/gmail.svg";
import PATTERN_1 from "../../assets/patterns/login-small.svg";
import PATTERN_2 from "../../assets/patterns/login-big.svg";
import "./index.css";

interface SignInProps {
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
  setSignUp: (arg: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({
  openModal,
  setOpenModal,
  setSignUp,
}) => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const handleForgetPassword = () => {
    setForgetPassword(true);
  };

  useEffect(() => {
    !openModal && setForgetPassword(false);
  }, [openModal]);

  return (
    <Modal setOpenModal={setOpenModal} openModal={openModal}>
      <div className="modal_signIn">
        <div className="modal_signIn_leftSide">
          <img src={PATTERN_1} alt="Pattern" />
          <img src={PATTERN_2} alt="Pattern" />
          <img src={PATTERN_1} alt="Pattern" />
        </div>
        <div className="modal_signIn_rightSide">
          <div className="modal_signIn_title">
            <p>{forgetPassword ? "Forgot your password?" : "Welcome !"}</p>
            {forgetPassword && (
              <p className="forgetPass_desc">
                Please, enter your email and we will send you a link to reset a
                password.
              </p>
            )}
          </div>
          <div className="signIn_form">
            <div className="signIn_formFields">
              <input placeholder="Email" type="text" className="form" />
              {!forgetPassword && (
                <input
                  placeholder="Password"
                  type="password"
                  className="form"
                />
              )}
            </div>
            {!forgetPassword && (
              <div className="forgetPassword">
                <button onClick={handleForgetPassword}>Forget password?</button>
              </div>
            )}
            <Button
              text={forgetPassword ? "Send" : "Log In"}
              link={false}
              to={""}
              style={{ background: "#DD264E", color: "#fff", width: "100%" }}
            />
          </div>
          {!forgetPassword ? (
            <div className="signIn_another">
              <div className="signIn_another_title">
                <div className="line"></div>
                <p>Log in with</p>
                <div className="line"></div>
              </div>
              <div className="signIn_another_icons">
                <a href="gmail.com">
                  <img src={GMAIL} alt="Gmail" />
                </a>
                <a href="gmail.com">
                  <img src={FB} alt="Facebook" />
                </a>
              </div>
              <div className="signIn_another_privacy">
                <p>
                  By continuing, you agree 301’s <br></br>
                  <span className="mentioned_txt">Terms of Services</span> and
                  <span className="mentioned_txt"> Privacy Policy</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="signIn_another_privacy">
              <p>
                If you need help, contact our
                <span className="mentioned_txt"> Support team</span>
              </p>
            </div>
          )}
          <div className="signIn_signUp">
            <p>
              Don't have an account?
              <button className="mentioned_txt" onClick={() => setSignUp(true)}>
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignIn;
