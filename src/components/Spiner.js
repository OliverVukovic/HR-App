import React from "react";
import './Spinner.css'

export const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loading">Loading....</div>
        </div>
        
    )
}