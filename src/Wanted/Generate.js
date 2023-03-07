import {Box} from "@mui/material";
import Menu from "../Home/Menu";
import {React} from "react";
import Page from "./Page";

function Generate() {
    return (
        <Box>
            <Menu/>
            <Box className="row mt-5">
                <Box className="col-sm-1 col-md-2"></Box>
                <Box className="bg-dark text-white col-sm-10 col-md-8 shadow-sm rounded">
                    <Page />
                </Box>
                <Box className="col-sm-1 col-md-2"></Box>
            </Box>
            <Box className={"my-5"}></Box>
        </Box>
    )
}

export default Generate;