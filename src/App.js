import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Dummy from './components/Dummy';
=======
import Deepak from './components/Deepak.js;
>>>>>>> 9f80f67427a798929ad8719a1fbc9573a9da5e5b

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
    <div className="App">
      <Dummy />
      <Dummy />
    </div>
      </BrowserRouter >
=======
	      <div className="App">
	        <MainComponent />
	    	<Deepak />
	      </div>
    </BrowserRouter>
>>>>>>> 9f80f67427a798929ad8719a1fbc9573a9da5e5b
    );
  }
}
