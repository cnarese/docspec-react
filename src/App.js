import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
