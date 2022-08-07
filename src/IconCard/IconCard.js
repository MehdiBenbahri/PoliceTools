import "./IconCard.css";

function IconCard(data) {
    return (
        <div style={{flex: "1 0 50%"}}
             className={"d-flex flex-wrap justify-content-between align-items-center " + data.className}>
            <div className="d-flex justify-content-start align-items-center">
                <div className={"big-icon " + data.iconColor}>{data.icon}</div>
                <div className="ms-2 mb-0 h5 text-blue-gray">{data.title}</div>
            </div>
            <div
                className="ps-3 ms-3 h-100 border-3 border-top-0 border-bottom-0 border-end-0 border border-gray-blue text-muted">
                Lorem ipsum dolor sit amet, nostrum officia optio placeat quidem quisquam saepe sint?
            </div>
        </div>
    )
}

export default IconCard;