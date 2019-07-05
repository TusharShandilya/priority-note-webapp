import React from 'react';
import './Navigation.css';


const Navigation = ({currentRoute, onNavClick}) => {

  if (currentRoute === 'signIn' || currentRoute === 'register') {
    return (<div className = "nav">
      <div className='list'>
        <p id="signIn" onClick={onNavClick}>SignIn</p>
        <p id="register" onClick={onNavClick}>Register</p>
        <p id="home" onClick={onNavClick}>AltHomeRoute</p>
      </div>
    </div>);
  } else {
    return (<div className = "nav">
      <div className='list'>
      <p id="signout" onClick={onNavClick}>SignOut</p>
      </div>
    </div>);
  }

  
};

export default Navigation;
