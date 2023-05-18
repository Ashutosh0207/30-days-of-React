import React from "react";
import './bar.css';

function bar(props) {
    return (
        <div className="img_bar">
            <img src={props.image} alt="" />
        </div>
    );
}

export default bar;
