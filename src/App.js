import React, { Component } from 'react';
import './App.css';

import Youtube from './components/Youtube';

class App extends Component {
  render() {

    const ids = [
      'InfuRIGFBwM',
      'aioXn0ut6gE',
      'InfuRIGFBwM',
      'aioXn0ut6gE',
      'InfuRIGFBwM'
    ];

    return (
      <div className="react-media-grid">
        {ids.map((id, index) => {
          return <Youtube id={id} key={index} />
        })}
      </div>
    );
  }
}

export default App;
