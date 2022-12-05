import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Shop from './components/Shop'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import CartApp from './components/Cart/CartApp'
import Aboutus from './components/Aboutus/Aboutus'
import ContactForm from './components/Contactus/ContactForm'
import Faq from "./components/Faq/Faq"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/register' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/contactus' element={<ContactForm />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/grain" element={<CartApp type="grain"/>} />
        <Route exact path="/vegetable" element={<CartApp type="vegetable"/>} />
        <Route exact path="/fruit" element={<CartApp type="fruit" />} />
        <Route exact path="/faq" element={<Faq />} />
      </Routes>
  </Router>
);