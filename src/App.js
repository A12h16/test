import './App.css';
import HomePage from './Home';
import Navbar from './Navbar';

function App() {
  const title ="Anusha's world"
  return (
    <div className="App">
      <Navbar/>
     <div className="Container">
      <HomePage/>
     </div>
    </div>
  );
}

export default App;
