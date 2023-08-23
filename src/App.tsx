import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Router from "./pages/router";
import "./App.css";
import { useLocation } from "react-router";

function App() {
  const location = useLocation()

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop()
  }, [location]);
  
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
