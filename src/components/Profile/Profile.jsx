/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <div className="profile">
      <Header />
      <div className="account">

        <h1 className="account__title">
          Привет, Виталий!
        </h1>
        <form className="account__form">
          <div className="account__field">
            <label className="account__label" htmlFor="name">Имя</label>
            <input required className="account__input" type="text" value="Виталий" name="name" id="name" />
          </div>
          <div className="account__field">
            <label className="account__label" htmlFor="email">E-mail</label>
            <input required className="account__input" type="text" value="pochta@yandex.ru" name="email" id="email" />
          </div>
        </form>
        <button type="button" className="account__edit-button">Редактировать</button>
        <button type="button" className="account__logout-button">Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
