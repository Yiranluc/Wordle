import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wordle_N from './pages/Wordle_N';
import Wordle_H from './pages/Wordle_H';
import SplashPage from './pages/SplashPage';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/home' element={<SplashPage/>}></Route>
          <Route path='/game/hard' element={<Wordle_H/>}></Route>
          <Route path='/game/normal' element={<Wordle_N/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)