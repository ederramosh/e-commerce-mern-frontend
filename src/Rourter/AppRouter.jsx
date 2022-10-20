import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import SignUpPge from '../Pages/SignUpPage';
import AboutPage from '../Pages/AboutPage';
import Nav from '../Components/Nav';
import Header from '../Components/Header';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPge />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter