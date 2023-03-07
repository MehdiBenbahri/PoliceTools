import {Box, Collapse, IconButton, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {SketchPicker} from "react-color";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
function SelectOptions({pageOptions, handlePageOptions}) {
    const [bureau, setBureau] = useState(pageOptions.bureau);
    const [color, setColor] = useState(pageOptions.color);
    const [showColorPicker, setShowColorPicker] = useState(false);

    useEffect(() => {
        if (pageOptions.bureau !== bureau || pageOptions.color !== color){
            const pageOptions = {
                bureau: bureau,
                color: color,
            }
            handlePageOptions(pageOptions)
        }
    }, [bureau,color,pageOptions, handlePageOptions])

    return (
        <Box className={"d-flex justify-content-between align-items-center"}>
            <ToggleButtonGroup variant={"standard"} color={"warning"} value={bureau}>
                <ToggleButton
                    value={0}
                    onClick={() => setBureau(0)}
                    sx={{border: "none"}}
                    className={`d-flex flex-column justify-content-between align-content-center align-items-center`}>
                    <img width={"25rem"} src={"/img/BCSO_logo.webp"} alt="logo BCSO"/>
                    <Typography className={"text-light ms-1"} variant={"overline"}>BCSO</Typography>
                </ToggleButton>
                <ToggleButton
                    value={1}
                    onClick={() => setBureau(1)}
                    sx={{border: "none"}}
                    className={`d-flex flex-column justify-content-between align-content-center align-items-center`}>
                    <img width={"25rem"} src={"/img/LSPD_logo.webp"} alt="logo LSPD"/>
                    <Typography className={"text-light ms-1"} variant={"overline"}>Vespucci</Typography>
                </ToggleButton>
                <ToggleButton
                    value={2}
                    onClick={() => setBureau(2)}
                    sx={{border: "none"}}
                    className={`d-flex flex-column justify-content-between align-content-center align-items-center`}>
                    <img width={"25rem"} src={"/img/MR_logo.webp"} alt="logo MR"/>
                    <Typography className={"text-light ms-1"} variant={"overline"}>Mission row</Typography>
                </ToggleButton>
                <ToggleButton
                    value={3}
                    onClick={() => setBureau(3)}
                    sx={{border: "none"}}
                    className={`d-flex flex-column justify-content-between align-content-center align-items-center`}>
                    <img width={"35rem"} src={"/img/FIB_logo.webp"} alt="logo MR"/>
                    <Typography className={"text-light ms-1"} variant={"overline"}>FIB</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
            <Box className={"position-relative"}>
                <IconButton color={"inherit"}
                        className={"border border-1 border-light"}
                        sx={{background:"linear-gradient(45deg, rgba(28,112,175,1) 0%, rgba(131,58,180,1) 20%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 80%, rgba(251,252,69,1) 100%);"}}
                        onClick={() => setShowColorPicker(!showColorPicker)}>
                    {
                        !showColorPicker ?
                            (<ColorLensIcon />) :
                            (<FormatColorResetIcon />)
                    }
                </IconButton>
                <Collapse in={showColorPicker}
                          sx={{right:"50%"}}
                          className={"position-absolute z-index-1 shadow-sm"}>
                    <SketchPicker disableAlpha={true}
                                  presetColors={['#fff','#e8e8e8','#d3b374','#22232B','#000']}
                                  color={color}
                                  onChangeComplete={(e) => setColor(e)} />
                </Collapse>
            </Box>
        </Box>
    )
}

export default SelectOptions;