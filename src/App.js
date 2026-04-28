import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Board from './components/Board';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/list" element={<Board />}> </Route>
      </Routes>
    </div>
  );
};

export default App;
