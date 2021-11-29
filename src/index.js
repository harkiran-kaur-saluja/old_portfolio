import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PROJECT_DATA from "./data/data.json";

let STATE = {currentData:PROJECT_DATA};

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App data={STATE.currentData}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );