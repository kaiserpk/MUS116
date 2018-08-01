// import './Hobbies.css';

import React, { Component } from 'react';
import {Element} from 'react-scroll';

export default class Hobbies extends Component {
  render() {
    return (
      <Element name="Hobbies" id="Hobbies">
        <h1 className="header"> Hobbies </h1>

        <p
          className="body"
          data-aos="fade"
          data-aos-offset="250"
          data-aos-duration="600"
        >
          I've always considered myself more artistic than the 
          average male in high school. Most of my peers were into 
          some form of sports. However, I was mainly interested in 
          drawing, reading, and singing. Since most of my friends would
          be athletic and great at sports, I often felt out of place. 
          I had a hard time finding commonalities with other guys since
          our ideas of fun were so different. During recess, while most
          of my friend were out playing sports, I preferred to stay in a
          classroom and read a book.
        </p>

        <div className="threes">
          <div className="column">
            <img
              src={require('./images/drawing.png')}
              data-aos="zoom-in"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title"> Drawing </h1>
              <div className="description">
                I've always loved drawing since I was young. However,
                drawing has always had a stigma that it isn't very manly.
                If you drew as a male, people often assumed that you were
                feminine. This stigma made me not want to draw in front
                of my friends.
              </div>
            </div>
          </div>
          <div className="column">
            <img
              src={require('./images/reading.png')}
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title"> Reading </h1>
              <div className="description">
                Reading helped me escape reality and enter a fantasy that
                I could imagine anything with endless possibilities.
                However, it also caused me to be more introverted compared
                to the other boys. Since males are supposed to be more active,
                I was always at odds of whether I should be out playing
                or inside reading.
              </div>
            </div>
          </div>
          <div className="column">
            <img
              src={require('./images/singing.png')}
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title"> Singing </h1>
              <div className="description">
                I learned to appreciate music as I grew older and eventually
                enjoyed singing as well. It provided me an outlet to express
                my emotions and have others feel my emotions as well. Yet, I felt
                uncomfortable singing in front of others, partly because I was shy, but
                also because it was viewed as "unmanly" in society.
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
