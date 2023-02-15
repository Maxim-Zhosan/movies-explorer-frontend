/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import './App.css';
import { useNavigate, Route, Routes } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import LoggedInContext from '../../contexts/LoggedInContext';
import ProtectedRoute from '../ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as mainApi from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [registerError, setRegisterError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const history = useNavigate();

  function handleLogin(data) {
    mainApi.authUser(data)
      .then((res) => {
        if (res) {
          console.log(res);
          setLoginError(false);
          setCurrentUser(res);
          setIsLoggedIn(true);
          history('/profile');
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      });
  }

  function handleRegister(data) {
    mainApi.registerNewUser(data)
      .then((res) => {
        if (res) {
          setRegisterError(false);
          handleLogin(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setRegisterError(true);
      });
  }

  function handleChangeProfileInfo(data) {
    mainApi.setUserInfo(data)
      .then((res) => {
        if (res) {
          setProfileError(false);
          setCurrentUser(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setProfileError(true);
      });
  }

  // React.useEffect(() => {
  //   if (isLoggedIn) {
  //     mainApi.checkToken()
  //       .then((res) => {
  //         console.log(res);
  //         setIsLoggedIn(true);
  //         setCurrentUser(res);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [isLoggedIn]);

  // React.useEffect(() => {
  //   mainApi.checkToken()
  //     .then((res) => {
  //       if (res.email) {
  //         setIsLoggedIn(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={isLoggedIn}>
        <div className="page">
          <Routes>
            <Route exact path="/movies" element={<ProtectedRoute component={<Movies />} />} />
            <Route exact path="/saved-movies" element={<ProtectedRoute component={<SavedMovies />} />} />
            <Route exact path="/profile" element={<ProtectedRoute component={<Profile handleChangeProfileInfo={handleChangeProfileInfo} profileError={profileError} />} />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/signin" element={<Login handleLogin={handleLogin} loginError={loginError} />} />
            <Route exact path="/signup" element={<Register handleRegister={handleRegister} registerError={registerError} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
