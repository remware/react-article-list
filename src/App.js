import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Timeline from './Timeline';
import './Timeline.css';

class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Timeline/>
        </div>
      </div>
    );
  }
}

export default App;
