import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <p className="footer__date">© 2020</p>
        <ul className="footer__links">
          <a href="http://practicum.yandex.ru/" className="footer__link" target="blank">Яндекс.Практикум</a>
          <a href="http://github.com/Maxim-Zhosan" className="footer__link" target="blank">Github</a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
