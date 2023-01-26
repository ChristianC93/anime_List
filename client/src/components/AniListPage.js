import React from "react";

function AniListPage({ user }) {
    console.log(user)

    const userAnimes = user.user_animes.map((ua) => {
        return(
        <div key={ua.id}>
            <h3>{ua.anime_name}</h3>
            <p>My Rating: {ua.rating}/10</p>
            <p>Review: {ua.review}</p>
        </div>
    )})
    return (
        <div>
            <h1>Welcome Back, {user.username}</h1>
            <h2>{user.username}'s AniList</h2>
            {userAnimes}
        </div>
    )
};

export default AniListPage;