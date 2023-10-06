import Modal from "../Modal";
import DONOR from "../../assets/signup-account-types/donor.svg";
import AMBASSADOR from "../../assets/signup-account-types/ambassador.svg";
import EXPERTS from "../../assets/signup-account-types/expert.svg";
import PARTNERS from "../../assets/signup-account-types/partners.svg";
import FRIENDS from "../../assets/signup-account-types/friends.svg";
import DONOR_MAIN from "../../assets/signup-account-types/donor-main.svg";
import AMBASSADOR_MAIN from "../../assets/signup-account-types/ambassador-main.svg";
import EXPERTS_MAIN from "../../assets/signup-account-types/experts-main.svg";
import PARTNERS_MAIN from "../../assets/signup-account-types/partners-main.svg";
import FRIENDS_MAIN from "../../assets/signup-account-types/friends-main.svg";
import PATTERN from "../../assets/signup-account-types/bg-pattern.svg";
import "./index.css";
import Button from "../Button";
import EcosystemModal from "../EcosystemModal";
import { useDispatch } from "react-redux";
import { isHomePage, openAccountTypeModal } from "../../actions/donateAction";

interface SignUpProps {
  signUp: boolean;
  setSignUp: (arg: boolean) => void;
  setSignIn: (arg: boolean) => void;
  // setAccountType: (arg: { open: boolean; id: number; name: string }) => void;
  handleClose: () => void;
}

interface AccountType {
  id: number;
  name: string;
  icon: string;
  mainImg: string;
  btn: string;
  btnStyle: React.CSSProperties;
}

const SignUp: React.FC<SignUpProps> = ({
  signUp,
  setSignUp,
  setSignIn,
  // setAccountType,
  handleClose,
}) => {
  const accountTypes: AccountType[] = [
    {
      id: 1,
      name: "доноры «301»",
      icon: DONOR,
      mainImg: DONOR_MAIN,
      btn: "Become one of 301",
      btnStyle: {
        background: "#189387",
        boxShadow: "-9px 11px 24px 0px rgba(24, 147, 135, 0.35)",
      },
    },
    {
      id: 2,
      name: "Амбассадор",
      icon: AMBASSADOR,
      mainImg: AMBASSADOR_MAIN,
      btn: "Стать амбассадором",
      btnStyle: {
        background: "#EE8842",
        boxShadow: "-9px 11px 24px 0px rgba(238, 136, 66, 0.35)",
      },
    },
    {
      id: 3,
      name: "Эксперты",
      icon: EXPERTS,
      mainImg: EXPERTS_MAIN,
      btn: "Стать экспертом",
      btnStyle: {
        background: "#42CFEE",
        boxShadow: "-9px 11px 24px 0px rgba(24, 147, 135, 0.35)",
      },
    },
    {
      id: 4,
      name: "Партнеры",
      icon: PARTNERS,
      mainImg: PARTNERS_MAIN,
      btn: "Стать партнером",
      btnStyle: {
        background: "#C12DD9",
        boxShadow: "-9px 11px 24px 0px rgba(193, 45, 217, 0.35)",
      },
    },
    {
      id: 5,
      name: "Друзья",
      icon: FRIENDS,
      mainImg: FRIENDS_MAIN,
      btn: "Стать другом фонда",
      btnStyle: {
        background: "#6442EE",
        boxShadow: "-9px 11px 24px 0px rgba(100, 66, 238, 0.35)",
      },
    },
  ];
  const dispatch = useDispatch();
  const handleAccountType = (id: number, name: string) => {
    // setAccountType({
    //   open: true,
    //   id,
    //   name,
    // });
    dispatch(
      openAccountTypeModal({
        open: true,
        id,
        name,
      })
    );
    dispatch(isHomePage(false));
    setSignUp(false);
  };
  return (
    <Modal
      setOpenModal={handleClose}
      openModal={signUp}
      className='signUp_overlay'>
      <EcosystemModal onClose={handleClose} header='select account type'>
        <div className='signUp_content_accountTypes'>
          <img src={PATTERN} alt='Pattern' className='accountTYpes_pattern' />
          {accountTypes.map(account => (
            <div
              className='accountType'
              key={account.id}
              id={`accountType-${account.id}`}>
              <div className='accountType_header'>
                <img src={account.icon} alt='Account' />
                <span>{account.name}</span>
              </div>
              <div className='accountType_mainImg'>
                <img src={account.mainImg} alt='Account Main' />
              </div>
              <Button
                text={account.btn}
                style={{
                  ...account.btnStyle,
                  color: "#fff",
                  border: "none",
                }}
                className='accountType_btn'
                link={false}
                to={""}
                onClick={() => handleAccountType(account.id, account.name)}
              />
            </div>
          ))}
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default SignUp;
