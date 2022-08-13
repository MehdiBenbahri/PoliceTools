import './App.css';
import Home from './Home/Home';
import Intro from "./Home/Intro";
import React from 'react';
import {Routes, Route} from "react-router-dom";
import PageNotFound from "./PageNotFound";

function App() {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Intro/>}/>
                <Route exact path="/bcso" element={<Home/>}/>
                <Route exact path="/vespucci" element={<Home/>}/>
                <Route exact path="/mission-row" element={<Home/>}/>
                {/* 👇️ only match this when no other routes match */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
