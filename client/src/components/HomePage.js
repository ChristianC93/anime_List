import React, {useState, useEffect} from "react";
import AniListForm from "./AniListForm";


function HomePage({ user }) {
    const [animes, setAnimes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [clickedAnime, setClickedAnime] = useState(null);
    
    //load anime in db
    useEffect(() => {
        fetch("/animes")
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((animes) => setAnimes(animes))
            }
        })
    }, []);

    //button for showing/hiding form and grabbing clickedanime
    const handleAddToAniListClick = (anime) => {
        setClickedAnime(anime);
        setShowForm(!showForm);
    };

    if (showForm) {
        return <AniListForm user={ user } clickedAnime={ clickedAnime }  />
    }

    //format for rendering each individual anime 
    const listOfAnimes = animes.map((anime) => {
        return (
            <div key={ anime.id } value={ anime.id }>
                <h3>{ anime.name }</h3>
                <img src={ anime.image_url } alt={ anime.name } width={ 200 } height={ 200 } />
                <p>Episode Count: { anime.episode_count }</p>
                <p>Genre: { anime.genre }</p>
                <br />
                <button onClick={() => handleAddToAniListClick(anime)}>Review</button>
            </div>
        )
    });

    return (
        <div>
            <h1>List of Animes:</h1>
            {listOfAnimes}
        </div>
    )
};

export default HomePage;