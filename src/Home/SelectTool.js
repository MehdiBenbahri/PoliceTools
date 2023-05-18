import {Box} from "@mui/material";
import Menu from "./Menu";
import {React} from "react";
import PDPCard from "./PDPCard";

function SelectTool() {
    return (
        <Box>
            <Menu/>
            <Box className="d-flex justify-content-center align-items-center shadow-sm mt-5">
                <Box
                    className="bg-dark text-white col-sm-10 col-md-8 shadow-sm py-5 d-flex flex-wrap justify-content-evenly align-items-center">
                    <PDPCard title={"Rapport d'intervention"}
                             img={"/img/serment.webp"}
                             description={`Un rapport directement transmis aux magistrats pour un procès comme on aime :
                                 Rapide et sans bavure pour les riches. \n
                                 Juridiquement douteux pour le reste.`}
                             btnText={""}
                             link={window.location.href + "/rapport"} />
                    <PDPCard title={"Plainte et déposition"}
                             img={"/img/fouille.webp"}
                             description={`Pour que les gens qui reste à l'entrée du PDP pendant 40 min soit utile, notre gouvernement
                             a conçu des procédures de plainte améliorées afin d'occuper les agents en ADP.`}
                             btnText={"Bientôt disponible"}
                             disabled={true}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default SelectTool;