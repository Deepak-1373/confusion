import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Deepak from './components/Deepak.js';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Deepak />
          <Dummy />
          <Dummy />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
