import './App.css';
import Home from './Home/Home';
import React from 'react';
import {Routes, Route} from "react-router-dom";

function App() {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/bcso" element={<Home/>}/>
                <Route exact path="/vespucci" element={<Home/>}/>
                <Route exact path="/mission-row" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
