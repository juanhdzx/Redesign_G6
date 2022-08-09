import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { Dictionary } from './Dictionary';
import { News } from './News';

export default function RouterPage() {
  return (
    <div>
        <BrowserRouter>
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


//hey