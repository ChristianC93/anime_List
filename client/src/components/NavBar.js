import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ userLogin }) {

    const handleLogoutClick = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((resp) => userLogin(null))
    };
    
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/user_animes">Ani List</Link>
            <Link to="/form">Add an Anime </Link>
            <Link onClick={handleLogoutClick}>Logout</Link>
        </nav>
    );
};

export default NavBar;