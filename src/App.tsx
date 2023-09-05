import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { scrollToTop } from "./globalFunctions/scrollToTop";
import Navbar from "./components/Navbar";
import Router from "./pages/router";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   scrollToTop();
  // }, [location]);

  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", signIn || signUp);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [signIn, signUp]);

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
      <SignUp signUp={signUp} setSignUp={setSignUp} setSignIn={setSignIn} />
    </div>
  );
}

export default App;
