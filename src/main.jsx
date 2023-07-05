import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App.jsx";

const name = "lord of seks"
const showName =
    <h1 style={{textAlign:"center"}}>
        {name}
    </h1>
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(showName)