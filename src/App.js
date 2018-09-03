import React, { Component } from 'react';
import './App.css';
import './Media.css';
import {
  LinearProgress
} from '@material-ui/core'
import TitleBar from './components/TitleBar'
import News from './components/news/'
import Footer from './components/Footer'
import {Consumer} from './Store'
class App extends Component {
  render() {
    return (
      <Consumer>
        {
          (store) => (
            <React.Fragment>
              {
                (store.isLoaded) ? 
                <React.Fragment>
                  <TitleBar active="home"/>
                  <News /> 
                  <Footer />
                </React.Fragment>
                :
                <LinearProgress />
              }
            </React.Fragment>

          )
        }
      </Consumer>
      
    );
  }
}

export default App;
