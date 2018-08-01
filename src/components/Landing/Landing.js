import './Landing.css';

import React, { Component } from 'react';
import {scroller} from 'react-scroll';

/* Scrolls to selected section */
function scrollToComp(name) {
  scroller.scrollTo(name, {
    offset: 0,
    smooth: true,
  });
}

class Landing extends Component {
  render() {
    return (
      <div id="Landing">
        <div id="title">
          <div className="large"> Breaking </div>
          
          <div className="small"> the </div>
          
          <span className="large"> Chains </span>
          <span className="small"> of </span>
          <span className="large"> Society </span>
          
          <i className="icon-angle-down move_btn" onClick={() => scrollToComp("Expectations")}></i>
        </div>
        <img src={require('./images/chains.png')} className="chain top left" />
        <img src={require('./images/chains.png')} className="chain top right" />
        <img src={require('./images/chains.png')} className="chain bottom left" />
        <img src={require('./images/chains.png')} className="chain bottom right" />
      </div>
    );
  }
}

export default Landing;
