import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Hello />
          <Hello222 />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
