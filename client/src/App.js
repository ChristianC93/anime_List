import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import AnimeForm from './components/AnimeForm';
import AniListPage from './components/AniListPage';
import HomePage from './components/HomePage';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  },[])
  if (!user) {
    return <LoginForm userLogin={setUser} />
  }
  return (
    <div className="App">
      <NavBar userLogin={setUser}/>
      <Routes>
          <Route path='/' element={<HomePage user={user} />} />
          <Route path="/anilist" element={<AniListPage user={user} />} />
          <Route path='/animeform' element={<AnimeForm user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
