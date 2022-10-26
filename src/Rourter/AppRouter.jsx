import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import SignUpPge from '../Pages/SignUpPage';
import AboutPage from '../Pages/AboutPage';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import ProfilePage from '../Pages/ProfilePage';
import Logout from '../Components/Logout';

const AppRouter = () => {
  const { user: { token,  rol } } = useContext(UserContext);
  // const { user: { token } } = useContext(UserContext);
  console.log(`token desde el app router ${token}`);
  console.log(`rol desde el app router ${rol}`);
  return (
    <BrowserRouter>
        <div className='container'>
          <Header />
          <Nav />
          <Routes>
            <Route path='/' element={<HomePage />} />
            { !token &&
              <Route path='/login' element={<LoginPage />} />
            }
            { !token &&
              <Route path='/signup' element={<SignUpPge />} />}
            <Route path='/about' element={<AboutPage />} />
            { token &&
              <Route path='/profile' element={<ProfilePage />} />
            }
            { token &&
              <Route path='/logout' element={<Logout />} />
            }
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter