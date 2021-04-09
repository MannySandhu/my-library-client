import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookSearchComponent from './components/BookSearchComponent'
import ListBooksComponent from './components/ListBooksComponent'
import UpdateBookComponent from './components/updateBookComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListBooksComponent}></Route>
            <Route exact path="/books" component={ListBooksComponent}></Route>
            <Route exact path="/search" component={BookSearchComponent}></Route>
            <Route exact path="/update/:id/:title/:pagesRead/:bookStatus" component={UpdateBookComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
  );
}

export default App;
