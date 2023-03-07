import {Box, Tooltip} from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';

function FactsList(props) {

    function handleQuantityChanged(event, index) {
        props.list[index].quantity = parseInt(event.target.value);
        props.onChangeFactsNum(props.list);
    }

    return (
        <div className={"text-dark-paper d-flex flex-column flex-wrap justify-content-center align-items col-12"}>
            {props.list.length > 0 ? (<h6>Détails des faits reprochés</h6>) : ""}
            {
                props.list.map((el, index) => {
                    return (
                        <Box key={el.name + "-list-facts"}
                             className={"col-sm-12 col-md-12 col-lg-8 col-xl-7 mt-1 text-truncate text-nowrap d-flex justify-content-between align-items-center"}>
                            <Box title={el.name} style={{width: "50%"}} className={"text-truncate text-nowrap"}>
                                {el.name}
                            </Box>
                            <Box className={"d-flex justify-content-between align-content-center align-items-center"}>
                                <Box className={"text-muted"}>
                                    x
                                    <input min={1} max={99}
                                           type="number"
                                           onChange={(event) => {
                                               handleQuantityChanged(event, index)
                                           }}
                                           className="bg-transparent border-solid border-yellow-paper"
                                           defaultValue={el.quantity}/>
                                </Box>
                                <Box className={"d-flex justify-content-between align-items-center"}>
                                    {
                                        el.comment ?
                                            (
                                                <Tooltip className={"ms-2"} title={el.comment}>
                                                    <CommentIcon/>
                                                </Tooltip>
                                            ) :
                                            (
                                                <Box className={"ms-2 opacity-50"}>
                                                    <CommentsDisabledIcon/>
                                                </Box>
                                            )
                                    }
                                </Box>
                            </Box>
                        </Box>
                    )
                })
            }
        </div>
)
}

export default FactsList