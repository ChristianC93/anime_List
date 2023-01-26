import React, { useState } from "react";


function AnimeForm({ user }) {
    const [userAnimes, setUserAnimes] = useState([user.user_animes])
    const [formData, setFormData] = useState({
        user: user,
        anime: "",
        rating:"",
        review:""
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/user_animes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((anime) => setUserAnimes([...userAnimes, anime]))
            } else {
                resp.json().then((error) => console.log(error.errors))
            }
        })
        .then(setFormData({
            user: user,
            anime: "",
            rating: "",
            review: ""
        }))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Anime Name:
                    <input type="anime" name="anime" onChange={handleChange} value={formData.anime} />
                </label>
                <br />
                <label>
                    Rating:
                    <input type="rating" name="rating" onChange={handleChange} value={formData.rating} />
                </label>
                <br />
                <label>
                    Review:
                    <input type="review" name="review" onChange={handleChange} value={formData.review} />
                </label>
                <br />
                <input type="submit" value="Add to List" />
            </form>
        </div>
    )
};

export default AnimeForm;