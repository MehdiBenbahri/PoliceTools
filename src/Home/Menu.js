import Tabs from "@mui/material/Tabs";
import LinkTab from "../Utils/LinkTab"
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box} from "@mui/material";

function Menu() {

    function getValueSelected() {
        switch (location.pathname) {
            case "/bcso":
                return 0
            case "/vespucci":
                return 1
            case "/mission-row":
                return 2
            case "/wanted":
                return 3
            case "/communication":
                return 4
            default:
                return 0
        }
    }

    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState(getValueSelected());


    return (
        <Box className={"d-flex justify-content-evenly align-items-center bg-dark shadow-sm"}>
            <Tabs value={value} aria-label="nav tabs principale" allowScrollButtonsMobile={true}>
                <LinkTab
                    className={"tab-hover " + (value === 0 ? "tab-selected" : "")}
                    icon={<img width={"25rem"} src={"/img/BCSO_logo.webp"} alt="logo BCSO"/>}
                    label="BCSO"
                    onClick={() => {
                        navigate("/bcso/rapport");
                        setValue(0);
                    }}
                />
                <LinkTab
                    className={"tab-hover " + (value === 1 ? "tab-selected" : "")}
                    icon={<img width={"25rem"} src={"/img/LSPD_logo.webp"} alt="logo LSPD"/>}
                    label="Vespucci"
                    onClick={() => {
                        navigate("/vespucci/rapport");
                        setValue(1);
                    }}
                />
                <LinkTab
                    className={"tab-hover me-md-3 me-lg-5 " + (value === 2 ? "tab-selected" : "")}
                    icon={<img width={"25rem"} src={"/img/MR_logo.webp"} alt="logo MR"/>}
                    label="Mission Row"
                    onClick={() => {
                        navigate("/mission-row/rapport");
                        setValue(2);
                    }}
                />
            </Tabs>
        </Box>
    )
}

export default Menu;