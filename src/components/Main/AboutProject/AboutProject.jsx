/* eslint-disable react/prop-types */
import React from 'react';
import './AboutProject.css';

function AboutProject({ projectRef }) {
  return (
    <section className="about" ref={projectRef}>
      <h2 className="about__title">О проекте</h2>
      <div className="about__description-wrapper">
        <div className="about__description">
          <h3 className="about__description-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__description-text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__description">
          <h3 className="about__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__timeline-block">
        <p className="about__timeline-box about__timeline-box_type_green-black">1 неделя</p>
        <p className="about__timeline-box about__timeline-box_type_white-grey">4 недели</p>
        <p className="about__timeline-box about__timeline-box_type_grey-transparent">Back-end</p>
        <p className="about__timeline-box about__timeline-box_type_grey-transparent">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
