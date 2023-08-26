import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "./globalFunctions/scrollToTop";
import Navbar from "./components/Navbar";
import Router from "./pages/router";
import "./App.css";
import i18n from "./i18n";

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
