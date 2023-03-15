import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wordle_N from './Wordle_N';

ReactDOM.render(
  <React.StrictMode>
    {/* change to nav page, difficultyy pass 6/7, round pass 6/5 */}
    <Wordle_N />
  </React.StrictMode>,
  document.getElementById('root')
)