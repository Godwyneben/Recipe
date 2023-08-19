import { BrowserRouter, Switch, Route } from 'react-router-dom';

// page components
import Navbar from './Components/Navbar';
import Home from './pages/Home/home'
import Create from './pages/Create/create'
import Search from './pages/Search/search'
import Recipe from './pages/Recipe/recipe'

// styles 
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
