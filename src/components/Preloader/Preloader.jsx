/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import './Preloader.css';

const Preloader = ({ isActive }) => {
  const addPreloaderClassName = (`preloader ${isActive && 'preloader_active'}`);
  return (
    <div className={addPreloaderClassName}>
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
};

export default Preloader;
