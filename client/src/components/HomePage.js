import React, {useState, useEffect} from "react";


function HomePage() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch("/animes")
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((animes) => setAnimes(animes))
            }
        })
    }, []);

    const handleAddToAniListClick = (id) => {
        console.log(id)
    };

    const listOfAnimes = animes.map((anime) => {
        return (
            <div key={anime.id} value={anime.id}>
                <h3>{anime.name}</h3>
                <p>Episode Count: {anime.episode_count}</p>
                <p> Genre: {anime.genre}</p>
                <img src={anime.image_url} alt={anime.name} width={200} height={200} />
                <br />
                <button onClick={() => handleAddToAniListClick(anime.id)}>Add to AniList</button>
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