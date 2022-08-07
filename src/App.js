import './App.css';
import Home from './Home/Home';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'react-pro-sidebar/dist/css/styles.css';

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

function App() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center bg-dark shadow-sm"}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs principale">
                    <LinkTab
                        className={"tab-hover tab-selected"}
                        icon={ <img width={"25rem"} src={"/img/BCSO_logo.png"} alt="logo BCSO"/>}
                        label="BCSO"
                        href="/bcso"
                        color={"success"}
                    />
                    <LinkTab
                        className={"tab-hover tab-selected"}
                        icon={ <img width={"25rem"} src={"/img/LSPD_logo.webp"} alt="logo LSPD"/>}
                        label="Vespucci"
                        href="/vespucci"
                    />
                    <LinkTab
                        className={"tab-hover tab-selected"}
                        icon={ <img width={"25rem"} src={"/img/MR_logo.png"} alt="logo MR"/>}
                        label="Mission Row"
                        href="/mission-row"
                    />
                </Tabs>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/bcso" element={<Home/>}/>
                <Route path="/vespucci" element={<Home/>}/>
                <Route path="/mission-row" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
