import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App data={INSERT DATA HERE}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );