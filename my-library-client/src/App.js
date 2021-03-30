import './App.css';
import DisplayBookComponent from './components/DisplayBookComponent'
import ListBooksComponent from './components/ListBooksComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="containers">
      <Router>
        <Switch>
          <Route path = "/books" component={ListBooksComponent}></Route>
          <Route path = "/books/search" component={DisplayBookComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
