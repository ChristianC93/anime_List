import './App.css';
import SignUpForm from './components/SignUpForm';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>AniList</h1>
      <LoginPage />
    </div>
  );
}

export default App;
