import { useEffect } from "react";
import Transition from "../components/utils/Transitions";


const Blog = () => {

  console.log("Blog page rendered");

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);
  
  return (
    <main>
      <h1>Blog</h1>
    </main>
  )
}

const BlogWithTransition = Transition(Blog);
export default BlogWithTransition;
