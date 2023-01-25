import React from "react";

function HomePage({user}) {
    console.log(user)
    return (
        <div>
            <h1>Welcome Back, {user.username}</h1>
        </div>
    )
};

export default HomePage;