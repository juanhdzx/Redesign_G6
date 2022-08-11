
import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './home';
import Contact from './Contact';
import Dictionary from './Dictionary';
import Newslist from './Newslist';
import {NavBar} from './NavBar';
import { Footer } from './Footer';



function RouterPage() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            
              <Route path="/"  element={<Home/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="dictionary" element={<Dictionary/>} />
              <Route path="news" element={<Newslist/>} />

          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}
export default RouterPage;
