import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "./globalFunctions/scrollToTop";
import Navbar from "./components/Navbar";
import Router from "./pages/router";
import "./App.css";
import SignIn from "./components/SignIn";

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", openModal);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openModal]);

  return (
    <div className="container">
      <Navbar setOpenModal={setOpenModal} />
      <Router />
      <SignIn openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
