import React, { useState } from "react";


function AnimeForm({ user, addNewAnime }) {
    // const [animes, setAnimes] = useState([]);
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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let resp = await fetch('/animes', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (resp.ok) {
            const anime = await resp.json();
            addNewAnime(anime);
        } else {
            const error = await resp.json();
            console.log(error.errors)
        }
        setFormData({
            name:"",
            episode_count:"",
            genre:"",
            image_url:""
        })
    }

    return (
        //form for adding an anime
        <div>
            <form className="form" onSubmit={ handleSubmit } >
                <label>
                    Anime Name:
                    <input type="name" name="name" onChange={ handleChange } value={ formData.name } />
                </label>
                <br />
                <label>
                    Episode Count:
                    <input type="episode_count" name="episode_count" onChange={ handleChange } value={ formData.episode_count } />
                </label>
                <br />
                <label>
                    Genre:
                    <input type="genre" name="genre" onChange={ handleChange } value={ formData.genre } />
                </label>
                <br />
                <label>
                    Image Url:
                    <input type="image_url" name="image_url" onChange={ handleChange } value={ formData.image_url } />
                </label>
                <br />
                <input className="submit" type="submit" value="Submit Anime" />
            </form>
        </div>
    )
};

export default AnimeForm;