import './App.css';
import SignUpForm from './components/SignUpForm';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
}

export default App;
