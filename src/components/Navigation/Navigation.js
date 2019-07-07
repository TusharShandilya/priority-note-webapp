import React from 'react';
import './Navigation.css';


const Navigation = ({currentRoute, handleRouteChange}) => {

  if (currentRoute === 'signIn' || currentRoute === 'register') {
    return (<div className = "nav">
      <div className='list'>
        <p id="signIn" onClick={() => handleRouteChange('signIn')}>SignIn</p>
        <p id="register" onClick={() => handleRouteChange('register')}>Register</p>
      </div>
    </div>);
  } else {
    return (<div className = "nav">
      <div className='list'>
      <p id="signout" onClick={() => handleRouteChange('signout')}>SignOut</p>
      </div>
    </div>);
  }  
};

export default Navigation;
