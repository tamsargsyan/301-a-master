import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { scrollToTop } from "./globalFunctions/scrollToTop";
import Navbar from "./components/Navbar";
import Router from "./pages/router";
import "./App.css";
import AgreementTermsModal from "./components/AgreementTermsModal";
import { useDispatch } from "react-redux";
import RecommentedModal from "./components/RecommentedModal";
import Conragts from "./components/Congrats";
import { login } from "./actions/authActions";
import { fetchingContact, getUser } from "./actions/apiActions";

function App() {
  const [signIn, setSignIn] = useState(false);
  const dispatch = useDispatch();

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

  useEffect(() => {
    // if (localStorage.getItem("token")) {
    //   dispatch(login());
    // }
    //@ts-ignore
    dispatch(fetchingContact("contact-us"));
    //@ts-ignore
    // dispatch(getUser("get-user"));
  }, [dispatch]);

  return (
    <div className='container'>
      <Navbar setOpenModal={setSignIn} signIn={signIn} />
      <Router />
      {/* <SignIn setSignUp={setSignUp} /> */}
      {/* <SignUp /> */}
      {/* <AccountTypeModal /> */}
      {/* <AgreementTermsModal /> */}
      {/* <Privacy /> */}
      {/* <Donation
        setSignUp={setSignUp}
        setOneTimeDonation={setOneTimeDonation}
        setDonateProjects={setDonateProjects}
      /> */}
      {/* <OneTimeDonation
        oneTimeDonation={oneTimeDonation}
        setOneTimeDonation={setOneTimeDonation}
        handleClose={() => {
          setOneTimeDonation(false);
          dispatch(openDonateModal(true));
        }}
      /> */}
      {/* <DonationProjectsModal
        donateProjects={donateProjects}
        setDonateProjects={setDonateProjects}
      /> */}
      {/* <DonateToTheProject /> */}
      <RecommentedModal />
      <Conragts />
    </div>
  );
}

export default App;
