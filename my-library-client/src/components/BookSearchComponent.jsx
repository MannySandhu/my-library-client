import React, { Component } from 'react';
import DisplayBook from './DisplayBookComponent';
import BookService from '../services/BookService';

class DisplayBookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isbn: '',
            book: []
        }
        this.saveBook = this.saveBook.bind(this);
        this.searchByIsbn = this.searchByIsbn.bind(this);
        this.onChangeIsbnHandler = this.onChangeIsbnHandler.bind(this);
    }

    saveBook(book) {
        console.log('saving book => ' + JSON.stringify(book))
        BookService.saveBook(book).then(res => {
            this.props.history.push('/books');
        })
    }

    searchByIsbn = (isbn) => {
        if(isbn.length === 13){
            BookService.getBookByIsbn(isbn).then(res => {
                this.setState({ book: res.data, isbn: ' '+isbn });
            });
        }
    }

    onChangeIsbnHandler = (event) => {
        let input = event.target.value;
        this.setState({ isbn: input });
        if(input.length === 13){
            BookService.getBookByIsbn(input).then(res => {
                this.setState({ book: res.data, isbn: ' '+input });
            });
        }
    }

    render() {
        const { book, isbn } = this.state;
        return (
            <div>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Find a book by ISBN:</label>
                                <input placeholder="Paste ISBN here" name="isbn" className="form-control"
                                    value={isbn} onChange={this.onChangeIsbnHandler} />
                            </div>
                            {/* <button className="btn btn-primary" onClick={this.searchByIsbn(isbn)}> Search </button> */}
                        </form>
                    </div>
                </div>
                <DisplayBook book={book}></DisplayBook>
                <br />
                <button className="btn btn-primary" onClick={() => this.saveBook(book)}> Add Book </button>
            </div>
        );
    }
}

export default DisplayBookComponent;