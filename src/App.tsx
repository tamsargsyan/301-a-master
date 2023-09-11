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

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   scrollToTop();
  // }, [location]);

  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [accountType, setAccountType] = useState(false);
  const [agreementTerms, setAgreementTerms] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(
      "no-scroll",
      signIn || signUp || accountType || agreementTerms
    );
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [signIn, signUp, accountType, agreementTerms]);

  useEffect(() => {
    signUp && setSignIn(false);
  }, [signUp]);

  return (
    <div className='container'>
      <Navbar setOpenModal={setSignIn} />
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
      />
      <AgreementTermsModal
        agreementTerms={agreementTerms}
        setAccountType={setAccountType}
        setAgreementTerms={setAgreementTerms}
      />
    </div>
  );
}

export default App;
