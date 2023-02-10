/* eslint-disable react/jsx-no-bind */
import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  const projectRef = React.useRef();
  const techRef = React.useRef();
  const aboutMeRef = React.useRef();

  function scrollToProject() {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToTech() {
    techRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToAboutMe() {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="main">
      <Header />
      <Promo />
      <NavTab
        scrollToProject={scrollToProject}
        scrollToTech={scrollToTech}
        scrollToAboutMe={scrollToAboutMe}
      />
      <AboutProject projectRef={projectRef} />
      <Techs techRef={techRef} />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Main;
