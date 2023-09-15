import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { scrollToTop } from "./globalFunctions/scrollToTop";
import Navbar from "./components/Navbar";
import Router from "./pages/router";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AccountTypeModal from "./components/AccountTypeModal";
import AgreementTermsModal from "./components/AgreementTermsModal";
import Privacy from "./components/Privacy";
import Donation from "./components/Donation";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   scrollToTop();
  // }, [location]);

  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [accountType, setAccountType] = useState({
    open: false,
    id: 0,
    name: "",
  });
  const [agreementTerms, setAgreementTerms] = useState(false);
  const [privacy, setPrivacy] = useState({
    modal: false,
    privacy: "",
  });
  const [donation, setDonation] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(
      "no-scroll",
      signIn || signUp || accountType.open || agreementTerms || privacy.modal
    );
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [signIn, signUp, accountType.open, agreementTerms, privacy.modal]);

  useEffect(() => {
    signUp && setSignIn(false);
  }, [signUp]);

  return (
    <div className='container'>
      <Navbar setOpenModal={setSignIn} setDonation={setDonation} />
      <Router />
      <SignIn
        openModal={signIn}
        setOpenModal={setSignIn}
        setSignUp={setSignUp}
      />
      <SignUp
        signUp={signUp}
        setSignUp={setSignUp}
        setSignIn={setSignIn}
        setAccountType={setAccountType}
      />
      <AccountTypeModal
        accountType={accountType}
        setSignUp={setSignUp}
        setAccountType={setAccountType}
        setAgreementTerms={setAgreementTerms}
        setPrivacy={setPrivacy}
      />
      <AgreementTermsModal
        agreementTerms={agreementTerms}
        setAccountType={setAccountType}
        setAgreementTerms={setAgreementTerms}
      />
      <Privacy
        privacy={privacy}
        setPrivacy={setPrivacy}
        setAccountType={setAccountType}
      />
      <Donation
        setSignUp={setSignUp}
        donation={donation}
        setDonation={setDonation}
      />
    </div>
  );
}

export default App;
