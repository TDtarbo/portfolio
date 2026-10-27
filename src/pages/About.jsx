import { useEffect } from 'react'
import Transition from "../components/utils/Transitions";

const About = () => {

  console.log("About page rendered");

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);
  
  return (
    <main>
      <h1>About</h1>
    </main>
  )
}

const AboutWithTransition = Transition(About);
export default AboutWithTransition;