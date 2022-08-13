function Total(props){

    return (
        <div className={"text-muted d-flex justify-content-between align-items-center col-sm-12 col-md-12 col-lg-7 col-xl-6"}>
            <div>
                Total des amendes : {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.totalPrice)}
            </div>
            <div>
                Temps de GAV : {props.totalTime > 0 ? props.totalTime + " minutes" : 0 + " minute"}
            </div>
        </div>
    )
}

export default Total;