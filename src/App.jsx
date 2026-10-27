import { HashRouter } from "react-router-dom";
import Header from "./components/utils/Header";
import logo from "./assets/logo-small.svg";
import "./styles/modules/App.css";
import { useEffect, useState } from "react";
import AnimatedRoutes from "./components/utils/AnimatedRoutes";
import CursorContextProvider from "./contexts/CursorContext";
import MenuBtnContextProvider from "./contexts/MenuBtnContext";
import CustomCursor from "./components/utils/CustomCursor";
import { ReactLenis } from '@studio-freight/react-lenis'


function App() {
  const routerBasename = import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {




    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
  
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

<<<<<<< HEAD
          <HashRouter>
=======
          <BrowserRouter basename={routerBasename}>
>>>>>>> 63ed49b (Configure GitHub Pages deployment)
            <MenuBtnContextProvider>
              <CursorContextProvider>
                <CustomCursor />
                <Header />
              </CursorContextProvider>
              <AnimatedRoutes />
            </MenuBtnContextProvider>
          </HashRouter>
        </>
      )}
      </ReactLenis>
    </>
  );
}

export default App;
