import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './utils/Header'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import './styles/modules/App.css';

function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
