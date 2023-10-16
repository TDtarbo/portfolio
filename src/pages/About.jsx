import Transition from "../utils/transitions";

const About = () => {

  console.log("About page rendered");
  
  return (
    <main>
      <h1>About</h1>
    </main>
  )
}

const AboutWithTransition = Transition(About);
export default AboutWithTransition;