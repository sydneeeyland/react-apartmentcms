import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Client, Admin } from './Layouts';
import { Home, PageNotFound, Login, Dashboard, Inquiry, Carousel, Properties, Floorplan, About } from './Pages';

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
          
          <Route path='/admin' element={<Admin />}>
            <Route index path='/admin' element={<Dashboard />} />
            <Route index path='/admin/dashboard' element={<Dashboard />} />
            <Route index path='/admin/inquiry' element={<Inquiry />} />
            <Route index path='/admin/carousel' element={<Carousel />} />
            <Route index path='/admin/properties' element={<Properties />} />
            <Route index path='/admin/floorplan' element={<Floorplan />} />
            <Route index path='/admin/aboutus' element={<About />} />
          </Route>

          <Route index path='/login' element={<Login />} />
          <Route exact path='*' element={<PageNotFound />} />
          
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
