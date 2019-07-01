import React from 'react';
import './Logo.css';
import checkListLogo from'./logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={checkListLogo} alt=""/>
      <p> PriorityNote. </p>
    </div>
  );
};

export default Logo;
