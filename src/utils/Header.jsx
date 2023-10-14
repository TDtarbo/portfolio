import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
