import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateUserAnime({ updateFunction }) {
    const [userAnime, setUserAnime] = useState({});
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    const navigate = useNavigate();
    let { id } = useParams();
    

    useEffect(async () => {
        let response = await fetch(`/user_animes/${id}`)
        response = await response.json();
        setUserAnime(response);
        setRating(response.rating);
        setReview(response.review);
    },[])

    if (!userAnime.user) {
        return "...loading"
    };

    //updating rating value
    const handleRatingChange = (e) => {
        setRating(e.target.value)
    };

    // updating review value
    const handleReviewChange = (e) => {
        setReview(e.target.value)
    };

    //fetch request update user anime
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch(`/user_animes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({rating, review})
        })
        const data = await response.json();
        if (response.ok) {
            updateFunction(data)
        }
        navigate('/anilist')

    }
    
    return (
        <div>
            <h2>Review for {userAnime.anime_name}</h2>
            <form onSubmit={ handleSubmit }>
                <input type="hidden" defaultValue={ userAnime.id } name="anime_id" />
                <input type="hidden" defaultValue={ userAnime.user.id }  name="user_id" />
                <label>
                    Rating: 
                    <select 
                        name="rating" 
                        defaultValue={ userAnime.rating } 
                        onChange={ handleRatingChange } 
                    >
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
                    <textarea 
                        name="review" 
                        defaultValue={ userAnime.review } 
                        maxLength={ 1000 }
                        onChange={ handleReviewChange }
                    />
                </label>
                <br />
                <input type="submit" value="Submit Changes" />
            </form>

        </div>
    )
};

export default UpdateUserAnime;