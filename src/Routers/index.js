import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, PageNotFound } from '../Pages/Client';
import { Login } from '../Pages/Admin';

const DefaultRoute = () => {
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='*' element={<PageNotFound />} />
            <Route exact path='login' element={<Login />} />
        </Routes>
    </Router>
}

export default DefaultRoute;

// TO REFACTOR