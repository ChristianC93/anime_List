import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ userLogin }) {

    const handleLogoutClick = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((resp) => {
            if (resp.ok) {
                userLogin(null)
            }
        })
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/animeform">Add an Anime </Link>
            <Link to="/anilist">AniList</Link>
            <Link onClick={handleLogoutClick}>Logout</Link>
        </nav>
    );
};

export default NavBar;