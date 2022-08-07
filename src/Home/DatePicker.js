import React from "react";

function DatePicker(props){

    function handleChange(e){
        props.onChange(e);
    }

    return (
        <div className={"d-flex flex-column justify-content-between"}>
            <label style={{fontSize:"0.75rem"}} htmlFor="date-production" className={"text-muted"}>{props.label}</label>
            <input name={"date-production"}
                   value={props.value}
                   onChange={handleChange}
                   className={"form-control-lg text-muted border border-yellow-paper shadow-none bg-transparent"}
                   type={"datetime-local"}
            />
        </div>
    );
}

export default DatePicker;