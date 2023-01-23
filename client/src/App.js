import { useEffect, useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';


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
  
  return (
    <div className="App">
      <h1>AniList!</h1>
      <LoginForm userLogin={setUser}/>
    </div>
  );
}

export default App;
