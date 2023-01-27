import Checkbox from "@mui/material/Checkbox";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import CommentIcon from '@mui/icons-material/Comment';

function FactsList(props) {

    function handleQuantityChanged(event, index) {
        props.list[index].quantity = parseInt(event.target.value);
        props.onChangeFactsNum(props.list);
    }

    function handlePayedStatusChanged(event, index) {
        props.list[index].is_not_payed = event.target.checked;
        props.onChangeFactsStatus(props.list);
    }

    return (
        <div className={"text-muted d-flex flex-column flex-wrap justify-content-center align-items col-12"}>
            {props.list.length > 0 ? (<h6>Détails des faits reprochés</h6>) : ""}
            {
                props.list.map((el, index) => {
                    return (
                        <div key={el.name + "-list-facts"}
                             className={"col-sm-12 col-md-12 col-lg-8 col-xl-7 mt-1 text-truncate text-nowrap d-flex justify-content-between align-items-center"}>
                            <span title={el.name} style={{width: "50%"}} className={"text-truncate text-nowrap"}>
                                {el.name}
                            </span>
                            <div className={"text-muted"}>
                                x
                                <input min={1} max={99}
                                       type="number"
                                       onChange={(event) => {
                                           handleQuantityChanged(event, index)
                                       }}
                                       className="bg-transparent border-solid border-yellow-paper"
                                       defaultValue={el.quantity}/>
                            </div>
                            <div className={"d-flex justify-content-between align-items-center"}>
                                {/*<Checkbox color={"default"} disabled defaultValue={el.is_not_payed}*/}
                                {/*          onChange={(event) => handlePayedStatusChanged(event, index)}/>*/}
                                {/*<label className={"text-muted ms-2 form-check-label"}>Amende impayée </label>*/}
                                {
                                    el.comment ?
                                        (
                                            <Tooltip className={"ms-2"} title={el.comment}>
                                                <CommentIcon/>
                                            </Tooltip>
                                        ) :
                                        ('')
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FactsList