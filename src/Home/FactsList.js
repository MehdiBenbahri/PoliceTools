function FactsList(props) {

    function handleQuantityChanged(event,index){
        props.list[index].quantity = parseInt(event.target.value);
        props.onChange(props.list);
    }

    return (
        <div className={"text-muted d-flex flex-column flex-wrap justify-content-center align-items col-12"}>
            {props.list.length > 0 ? (<h6>Détails des faits reprochés</h6>) : ""}
            {
                props.list.map((el, index) => {
                    return (
                        <div key={el.name + "-list-facts"}
                             className={"col-sm-12 col-md-12 col-lg-7 col-xl-6 mt-1 text-truncate text-nowrap d-flex justify-content-between align-items-center"}>
                            <span className={"text-truncate text-nowrap"}>
                                {el.name}
                            </span>
                            <div className={"text-muted"}>
                                x
                                <input min={1} max={99}
                                       type="number"
                                       onChange={(event) => {
                                           handleQuantityChanged(event,index)
                                       }}
                                       className="bg-transparent border-solid border-yellow-paper"
                                       defaultValue={el.quantity}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FactsList