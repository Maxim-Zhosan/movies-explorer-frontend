import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <a href="https://github.com/Maxim-Zhosan" className="portfolio__link" target="blank">
            <div className="portfolio__link-wrapper">
              <p className="portfolio__link-name">Статичный сайт</p>
              <p className="portfolio__link-arrow">↗</p>
            </div>
          </a>
        </li>
        <li className="portfolio__links-item">
          <a href="https://github.com/Maxim-Zhosan" className="portfolio__link" target="blank">
            <div className="portfolio__link-wrapper">
              <p className="portfolio__link-name">Адаптивный сайт</p>
              <p className="portfolio__link-arrow">↗</p>
            </div>
          </a>
        </li>
        <li className="portfolio__links-item">
          <a href="https://github.com/Maxim-Zhosan" className="portfolio__link" target="blank">
            <div className="portfolio__link-wrapper">
              <p className="portfolio__link-name">Одностраничное приложение</p>
              <p className="portfolio__link-arrow">↗</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
