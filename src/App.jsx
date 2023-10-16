import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import logo from "./assets/logo-small.svg";
import "./styles/modules/App.css";
import { useEffect, useState } from "react";
import AnimatedRoutes from "./utils/AnimatedRoutes";
import CursorContextProvider from "./contexts/CursorContext";
import CustomCursor from "./components/CustomCursor";

function App() {
  
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);



  return (
    <>
      {loading ? (
        <div className="preloader">
          <img className="preloader-logo" src={logo} />
        </div>
      ) : (
        <>
          <BrowserRouter>
            <CursorContextProvider>
              <CustomCursor/>
              <Header/>
            </CursorContextProvider>
            <AnimatedRoutes />
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
