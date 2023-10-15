import Transition from "../utils/transitions";

const Blog = () => {
  return (
    <main>
      <h1>Blog</h1>
    </main>
  )
}

const BlogWithTransition = Transition(Blog);
export default BlogWithTransition;
