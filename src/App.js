import React, { Component } from 'react';
import './App.css';
import './Media.css';
import TitleBar from './components/TitleBar'
import News from './components/news/'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TitleBar/>
        <News />
      </React.Fragment>
    );
  }
}

export default App;
