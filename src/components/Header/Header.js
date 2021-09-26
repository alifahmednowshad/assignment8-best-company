import React from "react";
import './Header.css';

const Header = () => {
  return (
      // This is hero area
      <div className='container hero-area'>
        <h2>Make Best Compnay Team</h2>
        <h5>Here is the rundown Top Company : Apple; Amazon; Google; Microsoft; Samsung; Walmart; Facebook; Apple.</h5>
        <h1>Company Budget: <span className='fw-bold'>100 Billion</span></h1>
      </div>
  );
};

export default Header;
