import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";
import Buscador from "./Buscador";

const Header = () => {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate({ pathname: path });
    };
    return (
        <div className="header">
            <div className="logo">
                <img src="/logoSGCS.svg" alt="Logo" />
                <h1>SCRUM</h1>
            </div>
            <div className="search-bar">
                <Buscador />
            </div>
        <nav>
            <ul>
                <li onClick={() => {handleClick("/")}}>Inicio</li>
                <li onClick={() => {handleClick("/about")}}>Informacion</li>
                <li onClick={() => {handleClick("/contact")}}>Contactos</li>
            </ul>
        </nav>
    </div>
    );
}

export default Header;
