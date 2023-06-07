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
            <Link to="/home">Home</Link>
            <Link to="/anime/new">Add an Anime </Link>
            <Link to="/anilist">My AniList</Link>
            <Link onClick={ handleLogoutClick }>Logout</Link>
        </nav>
    );
};

export default NavBar;