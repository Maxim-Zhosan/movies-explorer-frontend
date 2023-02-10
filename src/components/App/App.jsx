import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoggedInContext from '../../contexts/LoggedInContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (

    <LoggedInContext.Provider value={isLoggedIn}>
      <div className="page">
        <Routes>
          <Route exact path="/movies" element={isLoggedIn ? <Movies /> : <Navigate to="/" />} />
          <Route exact path="/saved-movies" element={isLoggedIn ? <SavedMovies /> : <Navigate to="/" />} />
          <Route exact path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/" />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signin" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/signup" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </LoggedInContext.Provider>

  );
}

export default App;
