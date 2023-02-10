/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
import React from 'react';
import './Header.css';
import { useLocation, Link } from 'react-router-dom';
import LoggedInContext from '../../contexts/LoggedInContext';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

function Header() {
  const [isNavOpened, setNav] = React.useState(false);
  const isLoggedIn = React.useContext(LoggedInContext);
  const currentRoute = useLocation();
  const headerPlaceName = (`header ${currentRoute.pathname === '/' ? 'header_type_main' : 'header_type_basic'}`);
  const headerLinksPlaceName = (`header__links ${isLoggedIn === true ? 'header__links_active' : 'header__links_non-active'}`);
  const headerAccountPlaceName = (`header__account ${isLoggedIn === true ? 'header__account_active' : 'header__account_non-active'}`);
  const headerLoginPlaceName = (`header__login ${isLoggedIn === false ? 'header__login_active' : 'header__login_non-active'}`);

  function openNav() {
    setNav(true);
  }

  function closeNav() {
    setNav(false);
  }

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeNav();
      }
    }
    if (isNavOpened) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isNavOpened]);

  return (
    <header className={headerPlaceName}>
      <Link to="/" className="header__logo-link"><img className="header__logo-image" src={logo} alt="Logo" /></Link>
      <ul className={headerLinksPlaceName}>
        <li><Link to="/movies" className="header__link header__link_type_bold">Фильмы</Link></li>
        <li><Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link></li>
      </ul>
      <div className={headerAccountPlaceName}>
        <Link to="/profile" className="header__account-link">Аккаунт</Link>
        <div className="header__account-background">
          <svg className="header__account-icon" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 4C8.5 5.38071 7.38071 6.5 6 6.5C4.61929 6.5 3.5 5.38071 3.5 4C3.5 2.61929 4.61929 1.5 6 1.5C7.38071 1.5 8.5 2.61929 8.5 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9.25C1.92893 9.25 0.25 10.9289 0.25 13V14H1.75V13C1.75 11.7574 2.75736 10.75 4 10.75H8C9.24264 10.75 10.25 11.7574 10.25 13V14H11.75V13C11.75 10.9289 10.0711 9.25 8 9.25H4Z"
              fill="white"
            />
          </svg>
        </div>
        <button className="header__account-menu-button" type="button" aria-label="Меню" onClick={openNav} />
      </div>
      <div className={headerLoginPlaceName}>
        <Link to="/signup" className="header__signup-link">Регистрация</Link>
        <Link to="/signin"><button type="button" className="header__signin-link">Войти</button></Link>
      </div>
      <Navigation isOpen={isNavOpened} onClose={closeNav} />
    </header>
  );
}
export default Header;
