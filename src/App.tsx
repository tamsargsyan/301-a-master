import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Router from "./pages/router";
import "./App.css";
import { useLocation } from "react-router";
import { scrollToTop } from "./globalFunctions/scrollToTop";

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
