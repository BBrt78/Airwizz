import './App.scss';
import React from 'react';
import {Home} from './Home';
import {Samochody} from './Samochody';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='samochody' element={<Samochody />} />
    </Routes>
    </Router>
  );
}

export default App;
