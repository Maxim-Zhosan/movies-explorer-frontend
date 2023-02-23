/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import LoggedInContext from '../../contexts/LoggedInContext';
import './Login.css';
import { emailRegex } from '../../utils/regex';

function Login({ handleLogin, loginError }) {
  const isLoggedIn = useContext(LoggedInContext);
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passInputValue, setPassInputValue] = useState('');
  const [submitButtonClass, setSubmitButtonClass] = useState('login__button login__button_disabled');
  const errorMessageClass = `login__input-error login__input-error_type_submit ${loginError && 'login__input-error_active'}`;

  function onChangeInput(e) {
    if (e.target.name === 'email') {
      if (emailRegex.test(e.target.value)) {
        e.target.parentNode.querySelector('.login__input-error_type_email').classList.remove('login__input-error_active');
      } else {
        e.target.parentNode.querySelector('.login__input-error_type_email').classList.add('login__input-error_active');
      }
      setEmailInputValue(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassInputValue(e.target.value);
    }
  }

  useEffect(() => {
    if (emailRegex.test(emailInputValue) && passInputValue.length >= 4) {
      setSubmitButtonClass('login__button');
    } else {
      setSubmitButtonClass('login__button login__button_disabled');
    }
  }, [emailInputValue, passInputValue]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailInputValue || !passInputValue) {
      return;
    }
    setEmailInputValue('');
    setPassInputValue('');
    handleLogin({
      email: emailInputValue,
      password: passInputValue,
    });
  }

  return (
    isLoggedIn ? <Navigate to="/" /> : (
      <div className="login">
        <Link to="/" className="login__logo-link" />
        <h1 className="login__title">
          Рады видеть!
        </h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login__label">E-mail</label>
          <input required className="login__input" type="email" name="email" id="email" value={emailInputValue} onChange={(e) => onChangeInput(e)} />
          <span className="login__input-error login__input-error_type_email">Введите корректный e-mail</span>
          <label className="login__label" htmlFor="password">Пароль</label>
          <input required className="login__input" type="password" name="password" id="password" value={passInputValue} onChange={(e) => onChangeInput(e)} />
          <span className="login__input-error login__input-error_type_password" />
          <span className={errorMessageClass}>Неправильная почта или пароль</span>
          <button type="submit" className={submitButtonClass}>Войти</button>
        </form>
        <p className="login__text">
          Ещё не зарегистрированы?
          <a className="login__signup-link" href="/signup"> Регистрация</a>
        </p>
      </div>
    ));
}

export default Login;
