import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AniListForm({ user, clickedAnime, addUserAnime }) {
    
    const [formData, setFormData] = useState({
        anime_id: clickedAnime.id,
        // user_id: user.id,
        rating: "",
        review: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        }); 
    };

    //add a user_anime
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
                resp.json().then((newUserAnime) => addUserAnime(newUserAnime))
            } else {
                resp.json().then((error) => console.log(error))
            }
        })
        .then(navigate("/"))
    }

    return (
        <div>
            <h2>Review for { clickedAnime.name }</h2>
            <form onSubmit={ handleSubmit }>
                <input type="hidden" value={ clickedAnime.id } name="anime_id" />
                <input type="hidden" value={ user.id } name="user_id" />
                <label>
                    Rating:
                    <select name="rating" value={ formData.rating } onChange={ handleChange }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <br />
                <label>
                    Review:
                    <textarea name="review" maxLength={ 1000 } value={ formData.review } onChange={ handleChange }></textarea>
                </label>
                <br />
                <input type="submit" value="Add to List" />
            </form>
        </div>
    )
};

export default AniListForm;