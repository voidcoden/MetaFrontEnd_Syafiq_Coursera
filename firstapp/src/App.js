import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Btn from './components/Btn';
import Promo from './components/Promo';

import './App.css';

function App() {
  return (
    <div>
      <Header name="Anna" color="purple" />
      <Main greet="Howdy" />
      <Sidebar greet="Hi" />
      <Btn />
      <Promo />
    </div>
    )
}

export default App;
