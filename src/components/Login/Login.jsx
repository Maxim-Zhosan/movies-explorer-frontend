/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <Link to="/" className="login__logo-link" />
      <h1 className="login__title">
        Рады видеть!
      </h1>
      <form className="login__form">
        <label htmlFor="email" className="login__label">E-mail</label>
        <input required className="login__input" value="pochta@yandex.ru" type="email" name="email" id="email" />
        <span className="login__input-error" />
        <label className="login__label" htmlFor="password">Пароль</label>
        <input required className="login__input" type="password" name="password" id="password" />
        <span className="login__input-error">Что-то пошло не так...</span>
        <button type="submit" className="login__button">Войти</button>
      </form>
      <p className="login__text">
        Ещё не зарегистрированы?
        <a className="login__signup-link" href="/signup">Регистрация</a>
      </p>
    </div>
  );
}

export default Login;
