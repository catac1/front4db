import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Join from './components/Join';
import Login from './components/Login';
import Reset from './components/Reset';
import Write from './components/Write';
import { Button } from 'antd';
import List from './components/List';
import Delete from './components/Delete';
import Update from './components/Update';
import Detail from './components/Detail';

const App = () => {
  return (
    <div>
      <Link to="/write"><Button>글쓰기</Button></Link>
      <Link to="/list"><Button>글목록</Button></Link>
      <Link to="/delete"><Button>글 삭제</Button></Link>
      <Link to="/update"><Button>글 수정</Button></Link>
      <Routes>
        <Route path="/detail" element={<Detail />}> </Route>
        <Route path="/delete" element={<Delete />}> </Route>
        <Route path="/update" element={<Update />}> </Route>
        <Route path="/list" element={<List />}> </Route>
        <Route path="/join" element={<Join />}  > </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/reset" element={<Reset />}> </Route>
        <Route path="/write" element={<Write />}> </Route>
      </Routes>
    </div>
  );
};

export default App;
