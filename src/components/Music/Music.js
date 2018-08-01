import './Music.css';
import {bobsMusic, myMusic} from './data.js';

import React, { Component } from 'react';
import {Element} from 'react-scroll';

let audio = new Audio();

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    }
  }

  play = (mp3) => {
    audio.src = mp3;

    if (this.state.playing) {
      audio.pause();
      audio.currentTime = 0;
    }
    else {
      audio.play();
    }

    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    return (
      <Element name="Music" id="Music">
        <h1 className="header white"> Music </h1>

        <p
          className="body white"
          data-aos="fade"
          data-aos-offset="250"
          data-aos-duration="600"
        >
          Most of my friends like rap, hip hop, and EDM music. I liked
          acoustic, R&B, and ballads. I was always afraid to share 
          my playlists with my friends since I was worried that I would be 
          judged for being different. By societal standards, my taste in music
          would have been considered "soft" or feminine. I was always confused
          by this notion that males and females had certain genres of music that
          they should listen to.
        </p>

        <div className="threes">
          <div className="column">
            <h1 className="title white"> My Friend's Playlist </h1>

            <div
              className="phone"
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="600"
            >
              <div className="phone__top-buttons">
                <div className="phone__top-buttons__power button"></div>
              </div>
              <div className="phone__left-buttons">
                <div className="phone__left-buttons__top button"></div>
                <div className="phone__left-buttons__middle button"></div>
                <div className="phone__left-buttons__bottom button"></div>
              </div>
              <div className="phone__top-face">
                <div className="phone__top-face__earpiece"></div>
              </div>
              <div className="phone__screen">
                <div className="app-bar"> Bob's Playlist </div>
                <div className="playlist">
                  {bobsMusic.map((song, i) => (
                    <div className="song" onClick={() => this.play(song.mp3)} key={i}>
                      <div className="song-title">
                        {song.title}
                      </div>
                      <div className="song-artist">
                        {song.artist}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="phone__bottom-face">
                <div className="phone__bottom-face__circlet"></div>
              </div>
            </div>
          </div>

          <div className="column">
            <h1 className="title white"> My Playlist </h1>

            <div
              className="phone"
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="600"
            >
              <div className="phone__top-buttons">
                <div className="phone__top-buttons__power button"></div>
              </div>
              <div className="phone__left-buttons">
                <div className="phone__left-buttons__top button"></div>
                <div className="phone__left-buttons__middle button"></div>
                <div className="phone__left-buttons__bottom button"></div>
              </div>
              <div className="phone__top-face">
                <div className="phone__top-face__earpiece"></div>
              </div>
              <div className="phone__screen">
                <div className="app-bar"> Kaiser's Playlist </div>
                <div className="playlist">
                  {myMusic.map((song, i) => (
                    <div className="song" onClick={() => this.play(song.mp3)} key={i}>
                      <div className="song-title">
                        {song.title}
                      </div>
                      <div className="song-artist">
                        {song.artist}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="phone__bottom-face">
                <div className="phone__bottom-face__circlet"></div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
