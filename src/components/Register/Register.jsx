/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import LoggedInContext from '../../contexts/LoggedInContext';
import './Register.css';

function Register({ handleRegister, registerError }) {
  const nameRegex = /^[a-zA-zа-яА-я0-9-\s]*$/i;
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.].*$/i;
  const passRegex = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/i;
  const isLoggedIn = useContext(LoggedInContext);
  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passInputValue, setPassInputValue] = useState('');
  const [submitButtonClass, setSubmitButtonClass] = useState('register__button register__button_disabled');
  const errorMessageClass = `register__input-error register__input-error_type_submit ${registerError && 'register__input-error_active'}`;

  function onChangeInput(e) {
    if (e.target.name === 'name') {
      if (nameRegex.test(e.target.value)) {
        setNameInputValue(e.target.value);
      } else {
        e.target.parentNode.querySelector('.register__input-error_type_name').classList.add('register__input-error_active');
        setTimeout(() => {
          e.target.parentNode.querySelector('.register__input-error_type_name').classList.remove('register__input-error_active');
        }, 3000);
      }
    }
    if (e.target.name === 'email') {
      if (emailRegex.test(e.target.value)) {
        e.target.parentNode.querySelector('.register__input-error_type_email').classList.remove('register__input-error_active');
      } else {
        e.target.parentNode.querySelector('.register__input-error_type_email').classList.add('register__input-error_active');
      }
      setEmailInputValue(e.target.value);
    }
    if (e.target.name === 'password') {
      if (passRegex.test(e.target.value)) {
        e.target.parentNode.querySelector('.register__input-error_type_password').classList.remove('register__input-error_active');
      } else {
        e.target.parentNode.querySelector('.register__input-error_type_password').classList.add('register__input-error_active');
      }
      setPassInputValue(e.target.value);
    }
  }

  useEffect(() => {
    if (nameRegex.test(nameInputValue) && nameInputValue.length >= 2 && emailRegex.test(emailInputValue) && passRegex.test(passInputValue)) {
      setSubmitButtonClass('register__button');
    } else {
      setSubmitButtonClass('register__button register__button_disabled');
    }
  }, [nameInputValue, emailInputValue, passInputValue]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nameInputValue || !emailInputValue || !passInputValue) {
      return;
    }
    setNameInputValue('');
    setEmailInputValue('');
    setPassInputValue('');
    handleRegister({
      name: nameInputValue,
      email: emailInputValue,
      password: passInputValue,
    });
  }

  return (
    isLoggedIn ? <Navigate to="/" /> : (
      <div className="register">
        <Link to="/" className="register__logo-link" />
        <h1 className="register__title">
          Добро пожаловать!
        </h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <label className="register__label" htmlFor="name">Имя</label>
          <input required className="register__input" type="text" name="name" id="name" value={nameInputValue} onChange={(e) => onChangeInput(e)} />
          <span className="register__input-error register__input-error_type_name">Доступные символы: Аа-Zz, Аа-Яя, пробел и дефис</span>
          <label className="register__label" htmlFor="email">E-mail</label>
          <input required className="register__input" type="email" name="email" id="email" value={emailInputValue} onChange={(e) => onChangeInput(e)} />
          <span className="register__input-error register__input-error_type_email">Введите корректный e-mail</span>
          <label className="register__label" htmlFor="password">Пароль</label>
          <input required className="register__input" type="password" name="password" id="password" value={passInputValue} onChange={(e) => onChangeInput(e)} />
          <span className="register__input-error register__input-error_type_password">Пароль недостаточно сложный</span>
          <span className={errorMessageClass}>Что-то пошло не так...</span>
          <button type="submit" className={submitButtonClass}>Зарегистрироваться</button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?
          <a className="register__signin-link" href="/signin"> Войти</a>
        </p>
      </div>
    ));
}

export default Register;
