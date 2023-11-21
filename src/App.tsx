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
  openDonateSingleProject,
} from "./actions/donateAction";
import { RootState } from "./store/configureStore";
import { useSearchParams } from "react-router-dom";
import RecommentedModal from "./components/RecommentedModal";
import Conragts from "./components/Congrats";
import { openPrivacyPolicy } from "./actions/privacyPolicyAction";

function App() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [oneTimeDonation, setOneTimeDonation] = useState(false);
  const [donateProjects, setDonateProjects] = useState(false);
  const { agreementTerms } = useSelector(
    (state: RootState) => state.privacyPolicy
  );
  const dispatch = useDispatch();
  const { modalName } = useSelector((state: RootState) => state.privacyPolicy);
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
        agreementTerms.modal ||
        isDonateModal ||
        oneTimeDonation ||
        donateProjects
    );
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [
    signIn,
    signUp,
    accountType.open,
    agreementTerms.modal,
    isDonateModal,
    oneTimeDonation,
    donateProjects,
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

  const ct = document.querySelectorAll(".ecosystemDetails_partners");

  let isDown = false;
  //@ts-ignore
  let startX;
  //@ts-ignore
  let scrollLeft;
  ct[0]?.addEventListener("mousedown", e => {
    //@ts-ignore
    isDown = true;
    //@ts-ignore
    startX = e.pageX - ct[0].offsetLeft;
    //@ts-ignore
    scrollLeft = ct[0].scrollLeft;
  });
  ct[0]?.addEventListener("mouseleave", () => {
    //@ts-ignore
    isDown = false;
  });
  ct[0]?.addEventListener("mouseup", () => {
    isDown = false;
  });
  ct[0]?.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    //@ts-ignore
    const x = e.pageX - ct[0].offsetLeft;
    //@ts-ignore
    const walk = (x - startX) * 2;
    //@ts-ignore
    ct[0].scrollLeft = scrollLeft - walk;
  });
  // });

  return (
    <div className='container'>
      <Navbar setOpenModal={setSignIn} signIn={signIn} />
      <Router />
      <SignIn signIn={signIn} setSignIn={setSignIn} setSignUp={setSignUp} />
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
      <AgreementTermsModal />
      <Privacy
        handleClose={() => {
          dispatch(openPrivacyPolicy(false, null, null));
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
          if (modalName === "donateToProject")
            dispatch(openDonateSingleProject(true, "donation"));
        }}
      />
      <Donation
        setSignUp={setSignUp}
        setOneTimeDonation={setOneTimeDonation}
        setDonateProjects={setDonateProjects}
      />
      <OneTimeDonation
        oneTimeDonation={oneTimeDonation}
        setOneTimeDonation={setOneTimeDonation}
        handleClose={() => {
          setOneTimeDonation(false);
          dispatch(openDonateModal(true));
        }}
      />
      <DonationProjectsModal
        donateProjects={donateProjects}
        setDonateProjects={setDonateProjects}
      />
      <DonateToTheProject setDonateProjects={setDonateProjects} />
      <RecommentedModal />
      <Conragts />
    </div>
  );
}

export default App;
