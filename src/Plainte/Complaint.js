import {Box, Typography} from "@mui/material";
import {React, useState} from "react";
import Menu from "../Home/Menu";
import ComplaintConditions from "./ComplaintConditions";
import ComplaintInfo from "./ComplaintInfo";
import ComplaintIdentity from "./ComplaintIdentity";
import ComplaintSubject from "./ComplaintSubject";
import TextField from "@mui/material/TextField";

function Complaint() {
    const [conditionsChecked, setConditionsChecked] = useState(false);
    const [, setCreated] = useState('');
    const [, setSelectedMat] = useState([]);
    return (
        <Box>
            <Menu/>
            <Box className="d-flex justify-content-center align-items-center shadow-sm mt-5">
                <Box
                    className="bg-dark text-white col-sm-10 col-md-8 shadow-sm py-5 d-flex flex-wrap justify-content-evenly align-items-center">
                    <Box className={"bg-yellow-paper text-dark mx-2 px-2 "}>
                        <Box className={"p-2"}>
                            <ComplaintInfo handleMat={(e) => setSelectedMat(e)} handleCreated={(e) => setCreated(e)}/>
                        </Box>
                        <hr/>
                        <Box className={"p-2"}>
                            <ComplaintConditions isAllChecked={(e) => setConditionsChecked(e)}/>
                        </Box>
                        <hr/>
                        <Box className={"p-2"}>
                            <Typography className={"text-dark-paper bg-bold"}>
                                1. Identité du plaignant
                            </Typography>
                            <ComplaintIdentity designation={"plaignant"}/>
                        </Box>
                        <hr/>
                        <Box className={"p-2"}>
                            <Typography className={"text-dark-paper bg-bold"}>
                                2. Identité du suspect
                            </Typography>
                            <ComplaintIdentity designation={"suspect"}/>
                        </Box>
                        <Box className={"p-2"}>
                            <TextField fullWidth={true}
                                       className={"my-2"}
                                       color={"warning"}
                                       label={"Informations complémentaires sur le suspect"}
                                       placeholder={"Détails supplémentaires (Plaque immat, appartement, uniforme...)"} />
                            <ComplaintSubject />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Complaint;