import {Box} from "@mui/material";
import "./Page.css";
import SelectOptions from "./SelectOptions";
import {useState} from "react";

function Page() {
    const [pageOptions, setPageOptions] = useState(0);
    const type = {
        0: {
            name: "BCSO",
            img: "/img/BCSO_logo.webp"
        },
        1: {
            name: "Vespucci",
            img: "/img/LSPD_logo.webp"
        },
        2: {
            name: "Mission row",
            img: "/img/MR_logo.webp"
        },
        3: {
            name: "FIB",
            img: "/img/FIB_logo.webp"
        }
    }
    return (
        <Box className={"py-2"}>
            <Box className={"my-2"}>
                <SelectOptions pageOptions={pageOptions} handlePageOptions={(e) => setPageOptions(e)}/>
            </Box>
            <Box className={"w-100 d-flex justify-content-center align-items-center"}>
                {
                    console.log(type[pageOptions.bureau])
                }

                <Box sx={{backgroundColor:pageOptions.color ? pageOptions.color.hex : "#fff"}} className={"page mb-5 position-relative"}>
                    <Box className={"position-absolute bg-image w-100 h-100 opacity-25"}
                         sx={{backgroundImage: `url(${(type[pageOptions.bureau] ? type[pageOptions.bureau].img : '')})`}}>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Page;