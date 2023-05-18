import React from "react";
import HTML from "../img/HTML.png"
import CSS from "../img/CSS.png"
import JS from "../img/JS.png"
import REACT from "../img/REACT.png"
import './bar.css';

function bar() {
    return (
        <div className="img_bar">
            <img src={HTML} alt="" />
            <img src={CSS} alt="" />
            <img src={JS} alt="" />
            <img src={REACT} alt="" />
        </div>
    );
}

export default bar;
