import React from "react";

function Header(props) {
    return (
        <div>
            <div className={"row my-2"}>
                <div className={"col-sm-12 col-md-8 col-lg-8 order-2 order-xs-2" +
                    " order-sm-2 order-md-2 order-lg-2 order-xl-1" +
                    " d-flex justify-content-center align-items-center"}>
                    <div className={"rubik-mono-one h2 mt-3 mb-0 text-center"}>{props.title}</div>
                </div>
                <div className={
                    "col-sm-12 " +
                    "col-md-4 " +
                    "col-lg-4 " +
                    "order-1 order-xs-1 order-sm-1 order-md-1 order-lg-1 order-xl-2 " +
                    "d-flex " +
                    "justify-content-center " +
                    "align-item-center "
                }>
                    <img height={"100rem"} width={"100rem"} src={props.imgURI} alt="logo BCSO"/>
                </div>
            </div>
            <hr/>
        </div>
    )
}
export default Header;