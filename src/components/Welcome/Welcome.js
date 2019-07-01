import React from 'react';
import './Welcome.css';

const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <p> {`Welcome, ${name}. What's on your mind?`} </p>
    </div>
  );
};



export default Welcome;
