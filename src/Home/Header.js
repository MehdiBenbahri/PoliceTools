import React from "react";

function Header(props) {
    return (
        <div>
            <div className={"row my-2"}>
                <div className={
                    "col-sm-12 " +
                    "col-md-12 " +
                    "col-lg-12 " +
                    "d-flex " +
                    "justify-content-center " +
                    "align-item-center "
                }>
                    <img height={"100rem"} width={"100rem"} src={props.imgURI} alt="logo BCSO"/>
                </div>
                <div className={"col-sm-12 col-md-12 col-lg-12 order-2 order-xs-2" +
                    " d-flex justify-content-center align-items-center"}>
                    <div className={"rubik-mono-one h2 mt-3 mb-0 text-center"}>{props.title}</div>
                </div>

            </div>
            <hr/>
        </div>
    )
}
export default Header;