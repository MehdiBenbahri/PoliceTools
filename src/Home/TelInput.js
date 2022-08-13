import TextField from "@mui/material/TextField";
import {React, useState} from "react";


function TelInput(props){

    const [value,setValue] = useState("");
    const [error,setError] = useState(false);
    const [helperText,setHelperText] = useState("Format: xxx-xxxx");
    function validateField(event){
        if (event.target.value[3] !== "-"){
            setError(true);
            setHelperText("Attention : Le format est incorrect, le 4ème caractère doit être un tiret")
        }
        else{
            setError(false);
            setHelperText("Format: xxx-xxxx")
        }
        if (event.target.value.length < 8){
            setError(true);
            setHelperText("Attention : Le numéro doit faire 8 caractères (tiret compris)")
        }
        else{
            setError(false);
            setHelperText("Format: xxx-xxxx")
        }
        props.onChange(event);
    }

    function handleChange(e){
        setValue(e.target.value);
        props.onChange(e);
    }

    return (
        <TextField fullWidth id="lastname" className={"rounded text-light bg-transparent"} color={"warning"}
                   label="Téléphone"
                   type={"tel"}
                   error={error}
                   value={value}
                   onChange={handleChange}
                   helperText={helperText}
                   onBlur={validateField}
                   onInput={(event) => {
                       if (event.target.value.length > event.target.maxLength){
                           event.target.value = event.target.value.slice(0, event.target.maxLength);
                       }
                   }}
                   inputProps={{
                       pattern:"[0-9]{3}-[0-9]{4}",
                       maxLength:8,
                   }}
                   placeholder={"100-2030"}
                   variant="outlined"/>
    )
}
export default TelInput;