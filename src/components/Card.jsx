import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Card.css";

const Card = ({ title, content, url }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate({ pathname: url });
    };
    return (
        <div className="container-cards">
            <div className="card" id={url} onClick={handleClick}>
                <p>{content}</p>
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default Card;
