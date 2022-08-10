import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Home';
import { Contact } from './Contact';
import { Dictionary } from './Dictionary';
import { News } from './News';
import {NavBar} from './NavBar';
//import './App.css';

 function RouterPage() {
  return (
    <div>
        <BrowserRouter>
        <NavBar />
          <Routes>
            
              <Route path="/"  element={<Home/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="dictionary" element={<Dictionary/>} />
              <Route path="news" element={<News/>} />

          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default RouterPage;
