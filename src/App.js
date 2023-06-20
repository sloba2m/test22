import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Common/common.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './Containers/Contact/Contact';
import WhatWeDo from './Containers/WhatWeDo/WhatWeDo';
import PastWork from './Containers/PastWork/PastWork';
import PastWorkInner from './Containers/PastWorkInner/PastWorkInner';
import OurBlog from './Containers/OurBlog/OurBlog';
import OurBlogInnerPage from './Containers/OurBlogInnerPage/OurBlogInnerPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/what-we-do' element={<WhatWeDo />} />
          <Route exact path='/past-work' element={<PastWork />} />
          <Route exact path='/past-work/:id' element={<PastWorkInner />} />
          <Route exact path='/our-blog' element={<OurBlog />} />
          <Route exact path='/our-blog/:id' element={<OurBlogInnerPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
