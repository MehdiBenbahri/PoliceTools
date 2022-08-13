import Menu from "./Home/Menu";
import {React} from "react";

function PageNotFound(){
    return (
        <div>
            <Menu/>
            <div className="row mt-5">
                <div className="col-sm-1 col-md-2"></div>
                <div className="text-white col-sm-10 col-md-8">
                    <h1 style={{textShadow:"2px 2px 3px black"}} className={"text-uppercase text-center mt-5"}>
                        Erreur 404 : La page que vous cherchez n'existe pas
                    </h1>
                    <h4 style={{textShadow:"2px 2px 3px black"}} className={"text-uppercase text-center"}>Y'a pa wesh.</h4>
                    <div className={"d-flex justify-content-center align-items-center"}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5utBaocQDVs?autoplay=1"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className="col-sm-1 col-md-2"></div>
            </div>
            <div className={"my-5"}></div>
        </div>
    )
}

export default PageNotFound;