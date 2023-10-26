import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../PageWithForm/Profile/Profile";
import Register from "../PageWithForm/Register/Register";
import Login from "../PageWithForm/Login/Login";
import Footer from "../Footer/Footer";
import { HEADERLOCATION, FOOTERLOCATION } from "../../utils/config/config";

function App() {
  const location = useLocation();

  const shouldShowHeader = HEADERLOCATION.some(
    (item) => location.pathname === item
  );
  const shouldShowFooter = FOOTERLOCATION.some(
    (item) => location.pathname === item
  );

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="page">
      <div className="page__container">
        {shouldShowHeader && <Header isLoggedIn={isLoggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/signin"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/profile"
            element={<Profile setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {shouldShowFooter && <Footer />}
      </div>
    </div>
  );
}

export default App;
