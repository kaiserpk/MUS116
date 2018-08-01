import Landing from './components/Landing/Landing.js';
import Expectations from './components/Expectations/Expectations.js';
import MyStory from './components/MyStory/MyStory.js';
import Hobbies from './components/Hobbies/Hobbies.js';
import Music from './components/Music/Music.js';
import College from './components/College/College.js';
import Conclusion from './components/Conclusion/Conclusion.js';
import './App.css';
import './fontello/css/fontello.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Expectations />
        <MyStory />
        <Hobbies />
        <Music />
        <College />
        <Conclusion />
      </div>
    );
  }
}

export default App;
