import './App.css';
import Home from './Home/Home';
import Intro from "./Home/Intro";
import React from 'react';
import {Routes, Route} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Generate from "./Wanted/Generate";

function App() {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Intro/>}/>
                <Route exact path="/bcso" element={<Home/>}/>
                <Route exact path="/vespucci" element={<Home/>}/>
                <Route exact path="/mission-row" element={<Home/>}/>
                <Route exact path="/wanted" element={<Generate/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
