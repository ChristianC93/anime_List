import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/user_animes">Ani List</Link>
            <Link to="/form">Add an Anime </Link>
            <Link to="/logout">Logout</Link>
        </nav>
    );
};

export default NavBar;