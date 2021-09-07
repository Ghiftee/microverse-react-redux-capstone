import {
  Route, Switch,
} from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Home from './components/Home';

function App() {
  return (
    <>
      <header>
        <h3 className="m-0">COVID-19 STATS</h3>
      </header>
      <main>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
