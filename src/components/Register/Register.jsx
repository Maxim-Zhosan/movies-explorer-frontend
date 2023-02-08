/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register">
      <Link to="/" className="register__logo-link" />
      <h1 className="register__title">
        Добро пожаловать!
      </h1>
      <form className="register__form">
        <label className="register__label" htmlFor="name">Имя</label>
        <input required className="register__input" value="Виталий" type="text" name="name" id="name" />
        <span id="popup__input_type_name-error" className="input__error" />
        <label className="register__label" htmlFor="email">E-mail</label>
        <input required className="register__input" value="pochta@yandex.ru" type="email" name="email" id="email" />
        <span id="popup__input_type_email-error" className="input__error" />
        <label className="register__label" htmlFor="password">Пароль</label>
        <input required className="register__input" type="password" name="password" id="password" />
        <span id="popup__input_type_submit-error" className="input__error">Что-то пошло не так...</span>
        <button type="submit" className="register__button">Зарегистрироваться</button>
      </form>
      <p className="register__text">
        Уже зарегистрированы?
        <a className="register__signin-link" href="/signin">Войти</a>
      </p>
    </div>
  );
}

export default Register;
