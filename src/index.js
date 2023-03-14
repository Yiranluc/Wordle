import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wordle from './Wordle';

ReactDOM.render(
  <React.StrictMode>
    {/* change to nav page */}
    <Wordle />
  </React.StrictMode>,
  document.getElementById('root')
)