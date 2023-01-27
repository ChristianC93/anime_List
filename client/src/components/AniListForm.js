import { useState } from "react";

function AniListForm({ user, clickedAnime }) {
    const [formData, setFormData] = useState({
        anime_id: clickedAnime.id,
        user_id: user.id,
        rating: "",
        review: ""
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        }); 
    };

    return (
        <div>
            <h2>Review for { clickedAnime.name }</h2>
            <form >
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