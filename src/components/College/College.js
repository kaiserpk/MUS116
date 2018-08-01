// import './College.css';

import React, { Component } from 'react';
import {Element} from 'react-scroll';

export default class College extends Component {
  render() {
    return (
      <Element name="College" id="College">
        <h1 className="header"> Enter College </h1>

        <p
          className="body"
          data-aos="fade"
          data-aos-offset="250"
          data-aos-duration="600"
        >
          My college experience really changed my perspective
          on social norms and who I am as a person. In the past,
          I had doubts of whether I was bad or unhealthy for being 
          different. However, meeting new friends, meditation, and
          exploration of the world helped me appreciate my unique
          qualities and embrace my differences.
        </p>

        <div className="threes">
          <div className="column">
            <img
              src={require('./images/friends.png')}
              data-aos="zoom-in"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title"> Friends </h1>
              <div className="description">
                The friends I made in college made the most impact on me
                in terms of helping me accept myself. Meeting a diverse group
                of people allowed me to understand that you don't have to fit
                a certain mold. I was able to appreciate qualities I had, while
                striving to be better in aspects that I wanted to improve on. 
              </div>
            </div>
          </div>
          <div className="column">
            <img
              src={require('./images/meditation.png')}
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title"> Introspection </h1>
              <div className="description">
                As an introvert, I spent many long hours contemplating why I
                was different than my peers and whether it was actually a problem
                or not. Why was I so different than what is considered the
                norm for males? I eventually reached the conclusion that being different
                is actually a blessing. People strive to be the same as others, but in
                actuality, the ones who make a difference are the ones who are different.
              </div>
            </div>
          </div>
          <div className="column">
            <img
              src={require('./images/exploration.png')}
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title"> Exploration </h1>
              <div className="description">
                By traveling to new locations and meeting people from all
                walks of life, I learned that different cultures have different
                values of what is considered "normal." What is considered "normal"
                has been built by other people who were probably no greater than me.
                "Normal" is a subjective term that should only be defined by oneself.
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
