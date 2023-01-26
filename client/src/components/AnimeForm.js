import React, { useState } from "react";


function AnimeForm({ user }) {
    const [animes, setAnimes] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        episode_count:"",
        genre:"",
        image_url:""
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        }); 
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch("/user_animes", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then((resp) => {
    //         if (resp.ok) {
    //             resp.json().then((anime) => setUserAnimes([...userAnimes, anime]))
    //         } else {
    //             resp.json().then((error) => console.log(error.errors))
    //         }
    //     })
    //     .then(setFormData({
    //         user: user,
    //         anime: "",
    //         rating: "",
    //         review: ""
    //     }))
    // };

    return (
        <div>
            <form >
                <label>
                    Anime Name:
                    <input type="name" name="name" onChange={handleChange} value={formData.name} />
                </label>
                <br />
                <label>
                    Episode Count:
                    <input type="episode_count" name="episode_count" onChange={handleChange} value={formData.episode_count} />
                </label>
                <br />
                <label>
                    Genre:
                    <input type="genre" name="genre" onChange={handleChange} value={formData.genre} />
                </label>
                <br />
                <label>
                    Image Url:
                    <input type="image_url" name="image_url" onChange={handleChange} value={formData.image_url} />
                </label>
                <br />
                <input type="submit" value="Add to List" />
            </form>
        </div>
    )
};

export default AnimeForm;