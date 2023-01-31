import React, {useState, useEffect} from "react";
import AniListForm from "./AniListForm";
import AnimeForm from "./AnimeForm";



function HomePage({ user, addUserAnime }) {
    const [animes, setAnimes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [clickedAnime, setClickedAnime] = useState(null);
    const [showAnimeForm, setShowAnimeForm] = useState(false);
    
    
    //get all anime 
    useEffect(() => {
        fetch("/animes")
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((animes) => setAnimes(animes))
            }
        })
    }, []);

    //to AnimeForm component
    const addNewAnime = (newAnime) => {
        setAnimes([...animes, newAnime])
    }

    //button for showing/hiding form and grabbing clickedanime
    const handleReviewClick = (anime) => {
        setClickedAnime(anime);
        setShowForm(!showForm);
    };

    const handleDontSeeAnimeClick = () => {
        setShowAnimeForm(!showAnimeForm);
    }

    if (showForm) {
        return <AniListForm user={ user } clickedAnime={ clickedAnime } addUserAnime={ addUserAnime }  />
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
                <button onClick={ () => handleReviewClick(anime) }>Review</button>
            </div>
        )
    });

    return (
        <div>
            <h1>List of Animes:</h1>
            {listOfAnimes}
            <div>
                <button onClick={ handleDontSeeAnimeClick }>{ showAnimeForm ? "Hide": "Add an anime" }</button>
            </div>
            { showAnimeForm  ? <AnimeForm addNewAnime={ addNewAnime } /> : "" }
        </div>
    )
};

export default HomePage;