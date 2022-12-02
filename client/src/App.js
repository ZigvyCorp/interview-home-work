import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
    );
};

export default App;
