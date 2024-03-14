import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Btn from './components/Btn';
import Promo from './components/Promo';
import Heading from './components/Heading';

import React, {useState} from 'react';
import './App.css';

function App() {
  // Hook: sort of like setter getter 
  const [word, setWord] = React.useState('Eat')

  function handleClick() {
    setWord('Drink')
  }

  return (
    <div className="App">
      <Header name="Anna" color="purple" />
      <Main greet="Howdy" />
      <Sidebar greet="Hi" />
      <Btn />
      <Promo />

      <Heading message={word + " at Little Lemon"}/>
      <button onClick={handleClick}>Click Here</button>

    </div>

    )
}

export default App;
