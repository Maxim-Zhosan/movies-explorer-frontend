/* eslint-disable react/prop-types */
import React from 'react';
import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab({ scrollToProject, scrollToTech, scrollToAboutMe }) {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <Link to="/" onClick={scrollToProject} className="navtab__link">О проекте</Link>
        <Link to="/" onClick={scrollToTech} className="navtab__link">Технологии</Link>
        <Link to="/" onClick={scrollToAboutMe} className="navtab__link">Студент</Link>
      </ul>
    </nav>
  );
}

export default NavTab;
