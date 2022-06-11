import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Client } from './Layouts/Client';
import { Home, PageNotFound } from './Pages/Client';
import { Login } from './Pages/Admin/';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route index path='/login' element={<Login />}></Route>
          <Route path='/' element={<Client />}>
            <Route index path='/' element={<Home />}></Route>
            <Route index path='/home' element={<Home />}></Route>
            <Route exact path='*' element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
