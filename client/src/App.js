import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import AnimeForm from './components/AnimeForm';
import AniListPage from './components/AniListPage';
import HomePage from './components/HomePage';
import UpdateUserAnime from './components/UpdateUserAnime';
import stockAnimeImage from './assets/stock_anime_photo.avif'




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/me");
      if (resp.ok) {
        const user = await resp.json();
        setUser(user);
      }
    };
    fetchData();
  }, []);
  
  const navigate = useNavigate();

  // to AniListForm component
  const addUserAnime = (newUserAnime) => {
    setUser({
      ...user,
      user_animes: [...user.user_animes, newUserAnime]
    })
    navigate("/anilist")
  };

  //to AniListPage component
  const deleteUserAnime = (userAnime) => {
    setUser({
      ...user,
      user_animes: [...user.user_animes].filter((ua) => ua.id !== userAnime.id)
    })
  };

  //to Update UserAnimeComponent
  const updateUserAnime = (updatedUserAnime) => {
    setUser({
      ...user,
      user_animes: [...user.user_animes].map((ua) => {
        if (ua.id === updatedUserAnime.id) {
          return updatedUserAnime;
        }
        else {
          return ua;
        }
      })
    })
  };

  if (!user) {
    return <LoginForm userLogin={ setUser } />
  }

  return (
    <div className="App">
      <NavBar userLogin={ setUser } />
      <Routes>
          <Route path='/home' element={ <HomePage user={ user } addUserAnime={ addUserAnime } /> } />
          <Route path="/anilist" element={ <AniListPage user={ user } deleteUserAnime={ deleteUserAnime } /> } />
          <Route path='/anime/new' element={ <AnimeForm user={ user } /> } />
          <Route path='/update/:id' element={ <UpdateUserAnime updateFunction={ updateUserAnime } /> } />
      </Routes>
    </div>
  );
}

export default App;
