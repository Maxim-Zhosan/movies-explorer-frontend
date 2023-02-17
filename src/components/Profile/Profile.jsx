/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ handleChangeProfileInfo, handleLogout, profileError }) {
  const currentUser = useContext(CurrentUserContext);
  const nameRegex = /^[a-zA-zа-яА-я0-9-\s]*$/i;
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.].*$/i;
  const [nameInputValue, setNameInputValue] = useState(currentUser.name);
  const [emailInputValue, setEmailInputValue] = useState(currentUser.email);
  const [submitButtonClass, setSubmitButtonClass] = useState('account__button account__button_disabled');
  const errorMessageClass = `account__input-error account__input-error_type_submit ${profileError && 'account__input-error_active'}`;

  function onChangeInput(e) {
    if (e.target.name === 'name') {
      if (nameRegex.test(e.target.value)) {
        setNameInputValue(e.target.value);
      } else {
        e.target.parentNode.querySelector('.account__input-error_type_name').classList.add('account__input-error_active');
        setTimeout(() => {
          e.target.parentNode.querySelector('.account__input-error_type_name').classList.remove('account__input-error_active');
        }, 3000);
      }
    }
    if (e.target.name === 'email') {
      if (emailRegex.test(e.target.value)) {
        e.target.parentNode.querySelector('.account__input-error_type_email').classList.remove('account__input-error_active');
      } else {
        e.target.parentNode.querySelector('.account__input-error_type_email').classList.add('account__input-error_active');
      }
      setEmailInputValue(e.target.value);
    }
  }

  useEffect(() => {
    if (nameRegex.test(nameInputValue) && nameInputValue.length >= 2 && emailRegex.test(emailInputValue) && (nameInputValue !== currentUser.name || emailInputValue !== currentUser.email)) {
      setSubmitButtonClass('account__edit-button');
    } else {
      setSubmitButtonClass('account__edit-button account__edit-button_disabled');
    }
  }, [nameInputValue, emailInputValue, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nameInputValue || !emailInputValue) {
      return;
    }
    handleChangeProfileInfo({
      name: nameInputValue,
      email: emailInputValue,
    });
  }

  return (
    <div className="profile">
      <Header />
      <div className="account">

        <h1 className="account__title">Привет, {currentUser.name}!</h1>
        <form className="account__form" onSubmit={handleSubmit}>
          <div className="account__field">
            <label className="account__label" htmlFor="name">Имя</label>
            <input required className="account__input" type="text" value={nameInputValue} name="name" id="name" onChange={(e) => onChangeInput(e)} />
            <span className="account__input-error account__input-error_type_name">Доступные символы: Аа-Zz, Аа-Яя, пробел и дефис</span>
          </div>
          <div className="account__field">
            <label className="account__label" htmlFor="email">E-mail</label>
            <input required className="account__input" type="text" value={emailInputValue} name="email" id="email" onChange={(e) => onChangeInput(e)} />
            <span className="account__input-error account__input-error_type_email">Введите корректный e-mail</span>
          </div>
          <span className={errorMessageClass}>Что-то пошло не так...</span>
          <button type="submit" className={submitButtonClass}>Редактировать</button>
          <button type="button" className="account__logout-button" onClick={handleLogout}>Выйти из аккаунта</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
