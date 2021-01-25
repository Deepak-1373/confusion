import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dummy from './components/Dummy';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Dummy />
        </div>
      </BrowserRouter>
    );
  }
}
