import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPge from "../Pages/SignUpPage";
import AboutPage from "../Pages/AboutPage";
import Nav from "../Components/Nav";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import ProfilePage from "../Pages/ProfilePage";
import Logout from "../Components/Logout";
import ItemDetailPage from "../Pages/ItemDetailPage";
import GamerPage from "../Pages/GamerPage";
import StreamingPage from "../Pages/StreamingPage";
import GadgetPage from "../Pages/GadgetPage";
import LaptopPage from "../Pages/LaptopPage";
import RefurbishedPage from "../Pages/RefurbishedPage";
import CartPage from "../Pages/CartPage";
import UserNavBar from "../Components/UserNavBar";

const AppRouter = () => {
  const {
    user: { token, rol },
  } = useContext(UserContext);
  console.log(`rol desde el app router ${rol}`);
  return (
    <BrowserRouter>
      <div className="container shadow py-1">
        <UserNavBar />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gamer" element={<GamerPage />} />
          <Route path="/laptop" element={<LaptopPage />} />
          <Route path="/streaming" element={<StreamingPage />} />
          <Route path="/gadgets" element={<GadgetPage />} />
          <Route path="/refurbished" element={<RefurbishedPage />} />
          {!token && <Route path="/login" element={<LoginPage />} />}
          {!token && <Route path="/signup" element={<SignUpPge />} />}
          <Route path="/about" element={<AboutPage />} />
          {token && <Route path="/profile" element={<ProfilePage />} />}
          {token && <Route path="/logout" element={<Logout />} />}
          {token && <Route path="/item-list" element={<CartPage />} />}
          <Route path="/item-detail/:id/:type" element={<ItemDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
