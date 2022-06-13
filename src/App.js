import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Client, Admin } from './Layouts';
import { Home, PageNotFound, Login, Discover } from './Pages';

// TO REFACTOR
function App() {
  return (
    <React.Fragment>
      
      <Router>
        <Routes>
          
          <Route path='/' element={<Client />}>
            <Route index path='/' element={<Home />} />
            <Route index path='/home' element={<Home />} />
          </Route>
          
          <Route path='/dashboard' element={<Admin />}>
            <Route index path='/dashboard/discover' element={<Discover />} />
          </Route>

          <Route index path='/login' element={<Login />} />
          <Route exact path='*' element={<PageNotFound />} />
          
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
