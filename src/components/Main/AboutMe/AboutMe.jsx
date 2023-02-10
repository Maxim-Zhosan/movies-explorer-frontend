/* eslint-disable react/prop-types */
import React from 'react';
import './AboutMe.css';

function AboutMe({ aboutMeRef }) {
  return (
    <section className="aboutme" ref={aboutMeRef}>
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__description-wrapper">
        <div className="aboutme__description-photo" />
        <div className="aboutme__description">
          <h3 className="aboutme__description-title">
            Виталий
          </h3>
          <p className="aboutme__description-subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="aboutme__description-text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/Maxim-Zhosan" className="aboutme__link" target="blank">Github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
