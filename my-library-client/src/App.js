import './App.css';
import BookSearchComponent from './components/BookSearchComponent'
import ListBooksComponent from './components/ListBooksComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <div className="container">
          <Switch>
            <Route exact path = "/" component = {ListBooksComponent}></Route>
            <Route exact path = "/books" component = {ListBooksComponent}></Route>
            {/* <Route exact path = "/search" component = {BookSearchComponent}></Route> */}
            <Route exact path = "/search" component = {BookSearchComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
