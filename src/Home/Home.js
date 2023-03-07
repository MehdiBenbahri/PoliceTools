import Header from "./Header";
import Menu from "./Menu";
import {React} from "react";
import Formulaire from "./Formulaire";
import {useLocation} from 'react-router-dom';

function Home() {
    const location = useLocation();

    function getImg() {
        switch (location.pathname) {
            case "/bcso/rapport":
                return "/img/BCSO_logo.webp"
            case "/vespucci/rapport":
                return "/img/LSPD_logo.webp"
            case "/mission-row/rapport":
                return "/img/MR_logo.webp"
            default:
                return "/img/BCSO_logo.webp"
        }
    }

    return (
        <div>
            <Menu/>
            <div className="row mt-5">
                <div className="col-sm-1 col-md-2"></div>
                <div className="bg-dark text-white col-sm-10 col-md-8 shadow-sm">
                    <Header
                        title={"Rapport d'intervention " + location.pathname.replace("/", "").replace("-", " ").replace("/rapport","")}
                        imgURI={getImg()}/>
                    <Formulaire/>

                </div>
                <div className="col-sm-1 col-md-2"></div>
            </div>
            <div className={"my-5"}></div>
        </div>
    );
}

export default Home;