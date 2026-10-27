import { motion } from "framer-motion";
import logo from '../../assets/logo-small.svg';

const Transition = (OgComponent) => {
    const TransitionComponent = () => (
      <>
        <OgComponent />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="loading"
          initial={{ display: "none" , opacity: 0,}}
          animate={{ display: "none", opacity: 0 }}
          exit={{ display: "block" , opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.5, 1, 0.5, 1] }}
        >
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <img className="preloader-logo" src={logo} />
            <p style={{marginTop: 20, color: "white"}}>&lt;DevThilina/&gt;</p>

          </div>
        </motion.div>
  
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [1, 0, 0.36, 1] }}
        />
      </>
    );
  
    TransitionComponent.displayName = `Transition(${OgComponent.displayName || OgComponent.name || "Component"})`;
  
    return TransitionComponent;
  };

  Transition.displayName = "Transition"
  
  export default Transition;