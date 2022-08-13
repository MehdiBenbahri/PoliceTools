import './App.css';
import Home from './Home/Home';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'react-pro-sidebar/dist/css/styles.css';
import {useNavigate, useLocation} from "react-router-dom";

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

    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = React.useState(getValueSelected());

    function getValueSelected() {
        switch (location.pathname) {
            case "/bcso":
                return 0
            case "/vespucci":
                return 1
            case "/mission-row":
                return 2
            default:
                return -1
        }
    }

    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center bg-dark shadow-sm"}>
                <Tabs value={value} aria-label="nav tabs principale">
                    <LinkTab
                        className={"tab-hover " + (location.pathname === "/bcso" ? "tab-selected" : "")}
                        icon={<img width={"25rem"} src={"/img/BCSO_logo.webp"} alt="logo BCSO"/>}
                        label="BCSO"
                        onClick={(e, n) => {
                            navigate("/bcso");
                        }}
                        href="/bcso"

                        color={"success"}
                    />
                    <LinkTab
                        className={"tab-hover " + (location.pathname === "/vespucci" ? "tab-selected" : "")}
                        icon={<img width={"25rem"} src={"/img/LSPD_logo.webp"} alt="logo LSPD"/>}
                        label="Vespucci"
                        onClick={() => navigate("/vespucci")}
                        href="/vespucci"
                    />
                    <LinkTab
                        className={"tab-hover " + (location.pathname === "/mission-row" ? "tab-selected" : "")}
                        icon={<img width={"25rem"} src={"/img/MR_logo.webp"} alt="logo MR"/>}
                        label="Mission Row"
                        onClick={() => navigate("/mission-row")}
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
