import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookSearchComponent from './components/SearchVolumeComponents/BookSearchComponent'
import DisplayMyBooksComponent from './components/DisplayVolumeComponents/DisplayMyBooksComponent'
import UpdateBookComponent from './components/UpdateVolumeComponents/updateBookComponent'
import HeaderComponent from './components/GlobalComponents/HeaderComponent';
import FooterComponent from './components/GlobalComponents/FooterComponent';

function App() {
  return (
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={DisplayMyBooksComponent}></Route>
            <Route exact path="/books" component={DisplayMyBooksComponent}></Route>
            <Route exact path="/search" component={BookSearchComponent}></Route>
            <Route exact path="/update/:id/:title/:pagesRead/:bookStatus" component={UpdateBookComponent}></Route>
          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
  );
}

export default App;
