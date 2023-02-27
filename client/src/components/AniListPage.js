import React from "react";
import { Link } from "react-router-dom";


function AniListPage({ user, deleteUserAnime }) {

    //delete a user_anime
    const handleDeleteButton = (ua) => {
        fetch(`/user_animes/${ua.id}`,{
            method:"DELETE",  
        })
        .then(() => deleteUserAnime(ua))
    }

    const userAnimes = user.user_animes.map((ua) => {
        return(
        <div key={ ua.anime.id }>
            <h3>{ ua.anime.name }</h3>
            <p>My Rating: { ua.rating }/10</p>
            <p>Review: { ua.review }</p>
            <Link to={`/update/${ua.id}`}><button>Edit</button></Link>  <button onClick={ () => handleDeleteButton(ua) }>Delete</button>
        </div>
    )});

    return (
        <div>
            <h1>{ user.username }'s AniList </h1>
            { userAnimes }
        </div>
    )
};

export default AniListPage;