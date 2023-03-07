import {Box} from "@mui/material";
import {React, useState} from "react";
import Menu from "../Home/Menu";
import ComplaintConditions from "./ComplaintConditions";
import ComplaintInfo from "./ComplaintInfo";

function Complaint() {
    const [conditionsChecked,setConditionsChecked] = useState(false);
    return (
        <Box>
            <Menu/>
            <Box className="d-flex justify-content-center align-items-center shadow-sm mt-5">
                <Box
                    className="bg-dark text-white col-sm-10 col-md-8 shadow-sm py-5 d-flex flex-wrap justify-content-evenly align-items-center">
                    <Box className={"bg-yellow-paper text-dark mx-2 p-2"}>
                        <ComplaintInfo />
                        <hr/>
                        <ComplaintConditions isAllChecked={(e) => setConditionsChecked(e)}/>
                    </Box>
                    {
                        console.log(conditionsChecked)
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Complaint;