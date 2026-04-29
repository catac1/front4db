import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Join from './components/Join';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/list" element={<Board />}> </Route>
        <Route path="/join" element={<Join />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
      </Routes>
    </div>
  );
};

export default App;
