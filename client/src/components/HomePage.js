import React from "react";

function HomePage({ user }) {
    console.log(user)

    const userAnimes = user.user_animes.map((ua) => {
        return(
        <div key={ua.id}>
            <h2>{ua.anime_name}</h2>
            <p>My Rating: {ua.rating}/10</p>
            <p>Review: {ua.review}</p>
        </div>
    )})
    return (
        <div>
            <h1>Welcome Back, {user.username}</h1>
            {userAnimes}
        </div>
    )
};

export default HomePage;