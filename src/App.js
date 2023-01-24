import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index';
import HomePage from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogsDetails from './BlogsDetails';


function App() {
  const title = "Anusha's world"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogsDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;