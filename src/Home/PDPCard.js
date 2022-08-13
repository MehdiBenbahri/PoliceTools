function PDPCard(props) {
    return (
        <div className="card" style={{width: "18rem", backgroundColor: "#343446"}}>
            <img className="card-img-top p-3" src={props.img} alt={props.title + " logo"}/>
            <div className="card-body">
                <h5 className="card-title text-center">{props.title}</h5>
                <p className="card-text text-center">{props.description}</p>
                <div className={"d-flex justify-content-center align-items-center"}>
                    <a href={props.link} className="btn btn-light">Faire un rapport {props.title}</a>
                </div>
            </div>
        </div>
    )
}

export default PDPCard;