import './MyStory.css';

import React, { Component } from 'react';
import {Element} from 'react-scroll';

export default class MyStory extends Component {
  render() {
    return (
      <Element name="MyStory" id="MyStory">
        <h1 className="header white"> My Story </h1>

        <p
          className="body white"
          data-aos="fade"
          data-aos-offset="250"
          data-aos-duration="600"
        >
          Growing up, I always felt a bit different from the rest of my peers.
          From my music taste to my hobbies, I was always the anomaly of my friend
          group. As a male, you are expected to be assertive, extroverted, and
          analytical, rather than emotional. I was the opposite. I always wondered
          why I was not as outgoing or confident as the other guys. At times, I was 
          even bullied for not being as "alpha" as the other guys. This is an 
          analysis of how and why I felt out of place in society growing up and the story 
          of how I came to love myself.
        </p>

        <div className="threes">
          <div className="column">
            <img
              src={require('./images/buff.png')}
              className="character"
              data-aos="zoom-in"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title white"> Ideal Male </h1>
              <div className="list">
                <div> Alpha </div>
                <div> Analytical </div>
                <div> Assertive </div>
                <div> Athletic </div>
                <div> Extroverted </div>
              </div>
            </div>
          </div>
          <div className="column">
            <img
              src={require('./images/skinny.png')}
              className="character"
              data-aos="zoom-in"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title white"> 15 Year Old Me </h1>
              <div className="list">
                <div> Artistic </div>
                <div> Compassionate </div>
                <div> Introverted </div>
                <div> Sensitive </div>
                <div> Shy </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
