import './App.css';
import DisplayBookComponent from './components/DisplayBookComponent'
import ListBooksComponent from './components/ListBooksComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <div className="container">
          <Switch>
            <Route exact path = "/" component = {ListBooksComponent}></Route>
            <Route path = "/books" component = {ListBooksComponent}></Route>
            <Route path = "/search/:isbn" component = {DisplayBookComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
