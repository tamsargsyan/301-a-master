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
import DonationProjectsModal from "./components/DonationProjectsModal";
import DonateToTheProject from "./components/DonateToTheProject";
import { useDispatch, useSelector } from "react-redux";
import {
  isHomePageModal,
  openAccountTypeModal,
  openDonateModal,
} from "./actions/donateAction";
import { RootState } from "./store/configureStore";
import { useSearchParams } from "react-router-dom";
import RecommentedModal from "./components/RecommentedModal";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   scrollToTop();
  // }, [location]);

  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [agreementTerms, setAgreementTerms] = useState(false);
  const [privacy, setPrivacy] = useState({
    modal: false,
    privacy: "",
  });
  // const [donation, setDonation] = useState(false);
  const [modalName, setModalName] = useState("");
  const [oneTimeDonation, setOneTimeDonation] = useState(false);
  const [donateProjects, setDonateProjects] = useState(false);
  const [donateSingleProject, setDonateSingleProject] = useState(false);

  const dispatch = useDispatch();
  const { isDonateModal } = useSelector(
    (state: RootState) => state.projectDetails
  );
  const { accountType } = useSelector((state: RootState) => state.homeData);

  useEffect(() => {
    document.body.classList.toggle(
      "no-scroll",
      signIn ||
        signUp ||
        accountType.open ||
        agreementTerms ||
        privacy.modal ||
        isDonateModal ||
        oneTimeDonation ||
        donateProjects ||
        donateSingleProject
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
    isDonateModal,
    oneTimeDonation,
    donateProjects,
    donateSingleProject,
  ]);

  useEffect(() => {
    signUp && setSignIn(false);
  }, [signUp]);
  const { isHomePage } = useSelector((state: RootState) => state.homeData);

  const [searchParams] = useSearchParams();
  const signInActive = searchParams.get("signIn") === "active";

  useEffect(() => {
    if (signInActive) setSignIn(true);
  }, [signInActive]);

  return (
    <div className='container'>
      <Navbar setOpenModal={setSignIn} setModalName={setModalName} />
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
        handleClose={() => {
          setSignUp(false);
          modalName === "signIn"
            ? setSignIn(true)
            : dispatch(openDonateModal(true));
        }}
      />
      <AccountTypeModal
        accountType={accountType}
        setSignUp={setSignUp}
        setAgreementTerms={setAgreementTerms}
        setPrivacy={setPrivacy}
        setModalName={setModalName}
        handleClose={() => {
          !isHomePage && setSignUp(true);
          dispatch(
            openAccountTypeModal({
              open: false,
              id: 0,
              name: "",
              type: "",
            })
          );
          dispatch(isHomePageModal(false));
        }}
      />
      <AgreementTermsModal
        agreementTerms={agreementTerms}
        setAgreementTerms={setAgreementTerms}
      />
      <Privacy
        privacy={privacy}
        setPrivacy={setPrivacy}
        handleClose={() => {
          setPrivacy({
            modal: false,
            privacy: "",
          });
          if (modalName === "oneTimeDonation") setOneTimeDonation(true);
          if (modalName === "signInModal") setSignIn(true);
          if (modalName === "accountTypeModal")
            dispatch(
              openAccountTypeModal({
                name: "donor",
                type: "",
                id: 1,
                open: true,
              })
            );
          if (modalName === "donateToProject") setDonateSingleProject(true);
        }}
      />
      <Donation
        setSignUp={setSignUp}
        setOneTimeDonation={setOneTimeDonation}
        setDonateProjects={setDonateProjects}
      />
      <OneTimeDonation
        oneTimeDonation={oneTimeDonation}
        setModalName={setModalName}
        setPrivacy={setPrivacy}
        setOneTimeDonation={setOneTimeDonation}
        handleClose={() => {
          setOneTimeDonation(false);
          dispatch(openDonateModal(true));
        }}
      />
      <DonationProjectsModal
        donateProjects={donateProjects}
        setDonateProjects={setDonateProjects}
        setDonateSingleProject={setDonateSingleProject}
      />
      <DonateToTheProject
        setDonateSingleProject={setDonateSingleProject}
        setDonateProjects={setDonateProjects}
        donateSingleProject={donateSingleProject}
        setPrivacy={setPrivacy}
        setModalName={setModalName}
      />
      <RecommentedModal />
    </div>
  );
}

export default App;
