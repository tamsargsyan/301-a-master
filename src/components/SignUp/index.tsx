import Modal from "../Modal";
import CLOSE from "../../assets/sign-up-close.svg";
import "./index.css";

interface SignUpProps {
  signUp: boolean;
  setSignUp: (arg: boolean) => void;
  setSignIn: (arg: boolean) => void;
}

const SignUp: React.FC<SignUpProps> = ({ signUp, setSignUp, setSignIn }) => {
  const handleSignIn = () => {
    setSignUp(false);
    setSignIn(true);
  };
  return (
    <Modal
      setOpenModal={handleSignIn}
      openModal={signUp}
      className="signUp_overlay"
    >
      <div className="signUp_bg">
        <div className="signUp_content">
          <div className="signUp_content_header">
            <div className="close" onClick={handleSignIn}>
              <img src={CLOSE} alt="Close" />
            </div>
            <div className="acount_type">
              <p>select account type</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUp;
