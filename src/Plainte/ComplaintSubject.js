import {Box} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import facts from "../Data/FactsV2";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FactsList from "../Home/FactsList";
import React,{ useState} from "react";
import Total from "../Home/Total";
import moment from "moment";
function ComplaintSubject(){
    function handleEditedFactStatus(e) {
        setSelectedFacts(e);
        setNbNotPayed(selectedFacts.filter(el => el.is_not_payed).length);
    }
    const [, setNbNotPayed] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    function handleEditedFact(e) {
        setSelectedFacts(e);
        setTotalPrice(selectedFacts.reduce(function (acc, obj) {
            return acc + (obj.price * obj.quantity);
        }, 0));
        setTotalTime(selectedFacts.reduce(function (acc, obj) {
            return acc + (obj.time * obj.quantity);
        }, 0));
        //sendData();
    }

    function containsObject(obj, list) {
        obj = JSON.parse(obj);
        let founded = false;
        list.forEach(el => {
            if (el.name === obj.name) {
                founded = true
            }
        });
        return founded;
    }

    const changeFacts = (event) => {
        setSelectedFacts([]);
        setSelectedFactsString([]);
        setTotalTime(0);
        setTotalPrice(0);
    }

    const handleFactChange = (event) => {
        const {
            target: {value},
        } = event;
        if (!containsObject(value, selectedFacts)) {
            setSelectedFacts(oldArray => [...oldArray, JSON.parse(value)]);
            selectedFactsString.push(JSON.parse(value).name);
            setTotalTime(totalTime + (JSON.parse(value).time * JSON.parse(value).quantity));
            setTotalPrice(totalPrice + (JSON.parse(value).price * JSON.parse(value).quantity));
        } else {
            setSelectedFacts(selectedFacts.filter(el =>
                el.name !== JSON.parse(value).name
            ));
            setSelectedFactsString(selectedFactsString.filter(el =>
                el !== JSON.parse(value).name
            ));
            setTotalTime(totalTime - JSON.parse(value).time * JSON.parse(value).quantity);
            setTotalPrice(totalPrice - JSON.parse(value).price * JSON.parse(value).quantity);
        }
    };
    const [selectedFacts, setSelectedFacts] = useState([]);
    const [selectedFactsString, setSelectedFactsString] = useState([]);
    return (
        <Box>
            <FormControl fullWidth>
                <Autocomplete
                    id="facts"
                    multiple
                    fullWidth
                    value={selectedFacts}
                    onChange={changeFacts}
                    disableCloseOnSelect
                    groupBy={(option) => option.group}
                    getOptionLabel={(selected) => selected.name}
                    color={"warning"}
                    isOptionEqualToValue={(el) => {
                        return true;
                    }}
                    options={facts}
                    renderTags={
                        (value, props) => (
                            <div {...props}>{
                                selectedFactsString.join(", ")
                            }</div>
                        )}
                    renderInput={(params) => (
                        <TextField {...params} label="Sélectionnez les faits reprochés"
                                   color={"warning"} placeholder="Rechercher les faits reprochés"/>
                    )}
                    renderOption={(props, option, {selected}) => (
                        <li key={option.name}>
                            <Checkbox color={"warning"}
                                      value={JSON.stringify(option)}
                                      onChange={handleFactChange}
                                      checked={containsObject(JSON.stringify(option), selectedFacts)}/>
                            <span>{option.name + " | " + option.price + "$"}</span>
                        </li>
                    )}
                />
            </FormControl>
            <Box className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                <FactsList onChangeFactsNum={handleEditedFact} onChangeFactsStatus={handleEditedFactStatus} list={selectedFacts}/>
            </Box>
            <Box className={"col-sm-12 col-md-12 col-lg-12 mt-3 px-4"}>
                <Total totalTime={totalTime} dateGav={moment().format("YYYY-MM-DDTHH:mm")} totalPrice={totalPrice}/>
            </Box>
        </Box>
    )
}
export default ComplaintSubject;