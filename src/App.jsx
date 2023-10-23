import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import logo from "./assets/logo-small.svg";
import "./styles/modules/App.css";
import { useEffect, useState } from "react";
import AnimatedRoutes from "./utils/AnimatedRoutes";
import CursorContextProvider from "./contexts/CursorContext";
import MenuBtnContextProvider from "./contexts/MenuBtnContext";
import CustomCursor from "./components/CustomCursor";
import { ReactLenis } from '@studio-freight/react-lenis'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {




    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
    <ReactLenis root>
          
      {loading ? (
        <div className="preloader">
          <img className="preloader-logo" src={logo} />
        </div>
      ) : (
        <>

          <BrowserRouter>
            <MenuBtnContextProvider>
              <CursorContextProvider>
                <CustomCursor />
                <Header />
              </CursorContextProvider>
              <AnimatedRoutes />
            </MenuBtnContextProvider>
          </BrowserRouter>
        </>
      )}
      </ReactLenis>
    </>
  );
}

export default App;
