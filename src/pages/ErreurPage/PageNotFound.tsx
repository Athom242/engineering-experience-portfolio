import React from "react";
import { Link } from "react-router-dom";





const PageNotFound: React.FC = () => {
    return (
    <div style={{ textAlign: "center", padding: "60px" }}>
        <h1 style={{ fontSize: "60px" }}>404</h1>
        <p>Oups… cette page n'existe pas</p>

        <Link to="/" style={{ color: "blue" }}>
            Retour à l'accueil
        </Link>
    </div>
    );
}

export default PageNotFound;