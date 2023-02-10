/* eslint-disable react/prop-types */
import React from 'react';
import './Techs.css';

function Techs({ techRef }) {
  return (
    <section className="techs" ref={techRef}>
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__description">
        <h3 className="techs__description-title">7 технологий</h3>
        <p className="techs__description-text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <div className="techs__list">
          <p className="techs__item">HTML</p>
          <p className="techs__item">CSS</p>
          <p className="techs__item">JS</p>
          <p className="techs__item">React</p>
          <p className="techs__item">Git</p>
          <p className="techs__item">Express.js</p>
          <p className="techs__item">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
