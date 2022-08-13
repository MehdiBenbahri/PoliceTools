import "./Home.css";
import Header from "./Header";
import {React, useState} from "react";
import Formulaire from "./Formulaire";
import {useLocation} from 'react-router-dom';
import Fade from '@mui/material/Fade';

function Home() {
    const location = useLocation();
    const [show] = useState(true);

    function getImg() {
        switch (location.pathname) {
            case "/bcso":
                return "/img/BCSO_logo.webp"
            case "/vespucci":
                return "/img/LSPD_logo.webp"
            case "/mission-row":
                return "/img/MR_logo.webp"
            default:
                return -1
        }
    }

    return (
        <div>
            <div>
                <div className="row mt-5">
                    <div className="col-sm-1 col-md-2"></div>
                    <div className="bg-dark text-white col-sm-10 col-md-8 shadow-sm">
                        <Header
                            title={"Rapport d'intervention " + location.pathname.replace("/", "").replace("-", " ")}
                            imgURI={getImg()}/>
                        <Formulaire/>

                    </div>
                    <div className="col-sm-1 col-md-2"></div>
                </div>
                <div className={"my-5"}></div>
            </div>
        </div>
    );
}

export default Home;