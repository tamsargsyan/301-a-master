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
import OneTimeDonation from "./components/OneTimeDonation";

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
  const [modalName, setModalName] = useState("");
  const [oneTimeDonation, setOneTimeDonation] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(
      "no-scroll",
      signIn ||
        signUp ||
        accountType.open ||
        agreementTerms ||
        privacy.modal ||
        donation ||
        oneTimeDonation
    );
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [
    signIn,
    signUp,
    accountType.open,
    agreementTerms,
    privacy.modal,
    donation,
    oneTimeDonation,
  ]);

  useEffect(() => {
    signUp && setSignIn(false);
  }, [signUp]);

  return (
    <div className='container'>
      <Navbar
        setOpenModal={setSignIn}
        setDonation={setDonation}
        setModalName={setModalName}
      />
      <Router />
      <SignIn
        signIn={signIn}
        setSignIn={setSignIn}
        setSignUp={setSignUp}
        setPrivacy={setPrivacy}
        setModalName={setModalName}
      />
      <SignUp
        signUp={signUp}
        setSignUp={setSignUp}
        setSignIn={setSignIn}
        setAccountType={setAccountType}
        handleClose={() => {
          setSignUp(false);
          modalName === "signIn" ? setSignIn(true) : setDonation(true);
        }}
      />
      <AccountTypeModal
        accountType={accountType}
        setSignUp={setSignUp}
        setAccountType={setAccountType}
        setAgreementTerms={setAgreementTerms}
        setPrivacy={setPrivacy}
        setModalName={setModalName}
        handleClose={() => {
          setSignUp(true);
          setAccountType({
            open: false,
            id: 0,
            name: "",
          });
        }}
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
        handleClose={() => {
          setPrivacy({
            modal: false,
            privacy: "",
          });
          if (modalName === "oneTimeDonation") {
            setOneTimeDonation(true);
          } else if (modalName === "signInModal") {
            setSignIn(true);
          } else if (modalName === "accountTypeModal")
            setAccountType({
              name: "donor",
              id: 1,
              open: true,
            });
        }}
      />
      <Donation
        setSignUp={setSignUp}
        donation={donation}
        setDonation={setDonation}
        setOneTimeDonation={setOneTimeDonation}
      />
      <OneTimeDonation
        oneTimeDonation={oneTimeDonation}
        setModalName={setModalName}
        setPrivacy={setPrivacy}
        setOneTimeDonation={setOneTimeDonation}
        handleClose={() => {
          setOneTimeDonation(false);
          setDonation(true);
        }}
      />
    </div>
  );
}

export default App;
