import {Box, Chip, Typography} from "@mui/material";
import DatePicker from "../Home/DatePicker";
import {useEffect, useState} from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import CancelIcon from '@mui/icons-material/Cancel';
import moment from "moment";

function ComplaintInfo({handleCreated, handleMat}) {
    const [created, setCreated] = useState(moment().format("YYYY-MM-DDTHH:mm"));
    const [selectedMat, setSelectedMat] = useState([]);
    const [matricules, setMatricules] = useState([]);

    useEffect(() => {
        handleCreated(created);
        handleMat(selectedMat);
    }, [selectedMat, created, handleCreated, handleMat])

    useEffect(() => {
        if (matricules.length === 0) {
            let mat = [];
            for (let i = 1; i <= 120; i++) {
                mat.push({
                    id: 'BCSO-' + i,
                    pdp: "BCSO",
                    mat: 'BCSO-' + (i < 10 ? "0" + i : i)
                });
            }
            for (let i = 1; i <= 120; i++) {
                mat.push({
                    id: 'VP-' + i,
                    pdp: "VP",
                    mat: 'VP-' + (i < 10 ? "0" + i : i)
                });
            }
            for (let i = 1; i <= 120; i++) {
                mat.push({
                    id: 'MR-' + i,
                    pdp: "MR",
                    mat: 'MR-' + (i < 10 ? "0" + i : i)
                });
            }
            setMatricules(mat);
        }
    }, [matricules])

    return (
        <Box className={"d-flex flex-wrap justify-content-between align-content-center"}>
            <FormControl className={"d-flex flex-column justify-content-start align-content-center"}>
                <Typography fontSize={"0.75rem"}
                            className={"text-dark-paper"}>
                    Date & Heure de la déposition
                </Typography>
                <DatePicker onChange={(e) => setCreated(e.target.value)} value={created}/>
            </FormControl>
            {
                matricules.length === 0 ?
                    ('') :
                    (
                        <FormControl
                            className={"col-sm-12 col-md-6 col-lg-8 d-flex flex-column justify-content-between align-content-center"}>
                            <Typography fontSize={"0.75rem"}
                                        className={"text-dark-paper"}>
                                Sélectionnez les agents dépositaire
                            </Typography>
                            <Autocomplete value={selectedMat}
                                          multiple={true}
                                          options={matricules}
                                          disableClearable={true}
                                          name={"autocomplete-mat"}
                                          renderInput={(params) => <TextField {...params}
                                                                              color={"warning"}
                                                                              placeholder={"BCSO-42; BCSO-06"}
                                                                              label={" "}/>}
                                          renderOption={(props, option, state) =>
                                              (
                                                  <Box key={"option-rendered-" + option.id + "-" + option.pdp}
                                                       className={"p-2 d-flex justify-content-between align-content-center"}>
                                                      {
                                                          option.mat
                                                      }
                                                      <Checkbox color={"warning"} onClick={(event) => {
                                                          if (event.target.checked) {
                                                              setSelectedMat([...selectedMat, option]);
                                                          } else {
                                                              setSelectedMat(selectedMat.filter(el => el.id !== option.id))
                                                          }
                                                      }
                                                      }>
                                                      </Checkbox>
                                                  </Box>
                                              )
                                          }
                                          groupBy={option => option.pdp}
                                          renderTags={(value) =>
                                              value.map((option, index) => (
                                                  <Chip key={"chips-" + option.pdp + "-" + option.id} variant="outlined"
                                                        label={(
                                                            <Box
                                                                className={"d-flex justify-content-between align-content-center"}>
                                                                <Box className={"text-dark-paper"}>
                                                                    {
                                                                        option.mat
                                                                    }
                                                                </Box>
                                                                <CancelIcon color={"inherit"}
                                                                            className={"my-1 ms-2 text-dark-paper"}
                                                                            fontSize={"0.75rem"}/>
                                                            </Box>
                                                        )}
                                                        className={"border-yellow-paper m-1"}
                                                        onClick={() => {
                                                            setSelectedMat(selectedMat.filter(el => el.id !== option.id))
                                                        }
                                                        }
                                                        clickable={true}
                                                  />
                                              ))
                                          }
                                          isOptionEqualToValue={(option, value) => {
                                              return option.id === value.id;
                                          }
                                          }
                                          getOptionLabel={(option) => option.mat ? option.mat : ''}
                                          onChange={(e) => setSelectedMat(e)}
                                          size={"small"}
                                          color={"warning"}/>
                        </FormControl>
                    )
            }
        </Box>
    )
}

export default ComplaintInfo;