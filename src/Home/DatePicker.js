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
                   min={props.min}
                   max={props.max}
                   style={{fontSize:"0.85rem"}}
                   onChange={handleChange}
                   className={"form-control-lg border shadow-none bg-transparent " + (props.isError ? "border-danger" : "border-yellow-paper")}
                   type={"datetime-local"}
            />
            {props.isError ? (<span style={{fontSize:"0.65rem"}} className="text-danger">Attention : la date doit-être inférieure à la date d'après</span>) : ''}

        </div>
    );
}

export default DatePicker;