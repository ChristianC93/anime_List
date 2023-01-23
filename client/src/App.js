import { useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';


function App() {

  useEffect(() => {
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => console.log(user))
      }
    })
  },[])
  
  return (
    <div className="App">
      <h1>AniList!</h1>
      <LoginForm />
    </div>
  );
}

export default App;
