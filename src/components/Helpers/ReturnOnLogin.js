import React from "react";
import "../helpers/Helpers.css";
import Header from "../layout/Header";

function ReturnOnLoginPage() {

    return (
        <>
            <Header />
            <div className="not-found">You are Login!</div>
            {/* <div className="not-found">Page not found!</div> */}
        </>
    )
}

export default ReturnOnLoginPage