import React from "react";
import "./Preloader.css";

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader-content">
                <span className="brand-text">Anuj...</span>
                <div className="loading-bar">
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
