import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/about';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='*' element={<div className='application-container'><Header/><hr/><h1>404 Not Found</h1></div>}/>
    </Routes>
  </BrowserRouter>
);
