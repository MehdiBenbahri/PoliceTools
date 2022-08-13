import "./Home.css";
import Header from "./Header";
import {React, useState} from "react";
import Formulaire from "./Formulaire";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";

function Home() {
    const [data, setData] = useState({});
    function getData(data){
        console.log(data);
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="col-sm-1 col-md-2"></div>
                <div className="bg-dark text-white col-sm-10 col-md-8 shadow-sm">
                    <Header title={"Rapport d'intervention BCSO"} imgURI={"/img/BCSO_logo.png"}/>
                    <Formulaire data={getData} />
                </div>
                <div className="col-sm-1 col-md-2"></div>
            </div>
            <div className={"my-5"}></div>
        </div>
    );
}

export default Home;