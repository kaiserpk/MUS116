import './Expectations.css';

import React, { Component } from 'react';
import {Element} from 'react-scroll';

export default class Expectations extends Component {
  render() {
    return (
      <Element name="Expectations" id="Expectations">
        <h1 className="header"> The Expectations of Society </h1>

        <p
          className="body"
          data-aos="fade"
          data-aos-offset="250"
          data-aos-duration="600"
        >
          As soon as we are born into this world, there are a multitude of expectations
          placed upon us. From a young age, we are taught that these societal values
          are what we should value as well. Many adhere to these standards and accept
          them as the norm, but those who do not fit the mold are branded as outcasts.
          With the large presence of media in this day and age, people are especially
          influenced by the opinions of others. Such expectations include the following:
        </p>

        <div className="threes">
          <div className="column">
            <img
              src={require('./images/job.png')}
              data-aos="zoom-in"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="title"> Occupation </h1>
              <p className="description">
                There is a large discrepancy between the types of jobs that are occupied
                by women and men. Most men are categorized as being fit as engineers,
                businessmen, or lawyers while most women are deemed to be fit
                as teachers, nurses, or customer service representatives.
              </p>
            </div>
          </div>
          <div className="column">
            <img
              src={require('./images/beauty.jpg')}
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <h1 className="title"> Appearance </h1>
              <p className="description">
                Especially with social media nowadays, people are even more obsessed with
                their appearance. Applications like Instagram, Snapchat, Facebook help
                reinforce this notion that your popularity and looks are everything.
                People who have many followers are often envied and revered by society.
              </p>
            </div>
          </div>
          <div className="column">
            <img
              src={require('./images/gender_roles.png')}
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-offset="250"
              data-aos-duration="600"
            />
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <h1 className="title"> Gender Roles </h1>
              <p className="description">
                Although not as pronounced as in the past, there are still prevalent
                gender roles within our society. Men are expected to be strong, assertive,
                and confident, while women are supposed to be more empathetic, emotional,
                and caring. Those who do not follow these gender roles are often scolded by
                society and told to change themselves.
              </p>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
