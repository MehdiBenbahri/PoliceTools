import {Box} from "@mui/material";

function PDPCard({img,title,description,link, btnText = "Faire un rapport"}) {
    return (
        <Box className="card" style={{width: "18rem", backgroundColor: "#343446"}}>
            <img className="card-img-top p-3" src={img} alt={title + " logo"}/>
            <Box className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center">{description}</p>
                <Box className={"d-flex justify-content-center align-items-center"}>
                    <a href={link} className="btn btn-light">{btnText} {title}</a>
                </Box>
            </Box>
        </Box>
    )
}

export default PDPCard;