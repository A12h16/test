import './index';
import HomePage from './Home';
import Navbar from './Navbar';

function App() {
  const title ="Anusha's world"
  return (
    <div className="App">
      <Navbar/>
     <div className="content">
      <HomePage/>
     </div>
    </div>
  );
}

export default App;
