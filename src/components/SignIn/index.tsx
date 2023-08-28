import Button from "../Button";
import Modal from "../Modal";
import FB from "../../assets/logo/fb.svg";
import GMAIL from "../../assets/logo/gmail.svg";
import "./index.css";

interface SignInProps {
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ openModal, setOpenModal }) => {
  return (
    <Modal setOpenModal={setOpenModal} openModal={openModal}>
      <div className="modal_sign">
        <div className="modal_signIn_leftSide"></div>
        <div className="modal_signIn_rightSide">
          <div className="welcome">
            <p>Welcome !</p>
          </div>
          <div className="signIn_form">
            <div className="signIn_formFields">
              <input placeholder="Email" type="text" className="form" />
              <input placeholder="Password" type="password" className="form" />
            </div>
            <div className="forgetPassword">
              <p>Forget password?</p>
            </div>
            <Button
              text="Log In"
              link={false}
              to={""}
              style={{ background: "#DD264E", color: "#fff", width: "100%" }}
            />
          </div>
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
          <div className="signIn_signUp">
            <p>
              Don't have an account?
              <button className="mentioned_txt">Sign Up</button>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignIn;
