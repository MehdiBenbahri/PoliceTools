import './App.css';
import Home from './Home/Home';
import Intro from "./Home/Intro";
import React from 'react';
import {Routes, Route} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Generate from "./Wanted/Generate";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectTool from "./Home/SelectTool";
import Complaint from "./Plainte/Complaint";
function App() {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Intro/>}/>
                <Route exact path="/bcso/rapport" element={<Home/>}/>
                <Route exact path="/bcso/complaint" element={<Complaint/>}/>
                <Route exact path="/bcso" element={<SelectTool/>}/>
                <Route exact path="/vespucci/rapport" element={<Home/>}/>
                <Route exact path="/vespucci" element={<SelectTool/>}/>
                <Route exact path="/mission-row/rapport" element={<Home/>}/>
                <Route exact path="/mission-row" element={<SelectTool/>}/>
                <Route exact path="/wanted" element={<Generate/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
