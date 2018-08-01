import './Conclusion.css';

import React, { Component } from 'react';
import {Element} from 'react-scroll';

export default class Conclusion extends Component {
  render() {
    return (
      <Element name="Conclusion" id="Conclusion">
        <h1 className="header white"> Challenging the Status Quo </h1>

        <div
          className="conclusion-body"
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-duration="600"
        >
          From my experiences in college and through much introspection, I've
          learned that it's ok to be different that everyone else. Just because
          you're not following everyone else does not mean something is
          wrong with you. It just means you're human and make decisions for
          yourself and not some mindless robot. One should strive to be different, to
          make a mark on the world.
        </div>

        <img
          src={require('./images/me.png')}
          className="conclusion-me"
          data-aos="zoom-in"
          data-offset="250"
          data-aos-duration="600"
        />

        <div id="quote-container">
          <img
            className="quote-image"
            src={require('./images/jobs.jpeg')}
            data-aos="zoom-in"
            data-offset="250"
            data-aos-duration="600"
          />
          <div
            style={{display: "flex"}}
            data-aos="fade-left"
            data-offset="250"
            data-aos-duration="600"
          >
            <span className="quote-quotes">❝</span>
            <span className="rush-quote">
              Here's to the crazy ones. The misfits, the rebels, the troublemakers, 
              the round pegs in the square holes, the ones who see things differently. 
              They're not fond of rules, and they have no respect for the status quo. 
              You can quote them, disagree with them, glorify or vilify them. 
              About the only thing you can't do is ignore them. Because they change 
              things - they push the human race forward. And while some may see them 
              as the crazy ones, we see genius. Because the people who are crazy enough 
              to think they can change the world, are the ones who do.
            </span>
          </div>
        </div>
      </Element>
    );
  }
}
