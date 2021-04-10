import React, { Component } from 'react';
import DisplayBook from './DisplayBookComponent';
import DisplayBooks from './BookSearchByTerms';
import BookService from '../services/BookService';

class DisplayBookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            useSearchTerms: false,
            terms: '',
            isbn: '',
            bookResultByIsbn: [],
            bookResultsByTerms: []
        }
        this.saveBook = this.saveBook.bind(this);
        this.onChangeIsbnHandler = this.onChangeIsbnHandler.bind(this);
        this.onChangeTermsHandler = this.onChangeTermsHandler.bind(this);
    }

    toggleSearch = () => {
        const { useSearchTerms } = this.state;
        this.setState({ useSearchTerms: !useSearchTerms });
    }

    saveBook(book) {
        if (book !== []) {
            console.log('saving book => ' + JSON.stringify(book))
            BookService.saveBook(book).then(res => {
                this.props.history.push('/books');
            })
        }
    }

    onChangeIsbnHandler = (event) => {
        let input = event.target.value;
        this.setState({ isbn: input });
        if (input.length === 13) {
            BookService.getBookByIsbn(input).then(res => {
                if (res.status === 200) {
                    this.setState({ bookResultByIsbn: res.data });
                } else {
                    console.log(res.response);
                }
            });
        } else {
            this.setState({ bookResultByIsbn: [] });
        }
    }

    onChangeTermsHandler = (event) => {
        let input = event.target.value;
        this.setState({ terms: input });
    }
    
    searchByTerms = (e) => {
        e.preventDefault();
        const { terms } = this.state;
        BookService.getBooksByTerms(terms).then(res => {
            if (res.status === 200) {
                this.setState({ bookResultsByTerms: res.data });
            } else {
                console.log(res.response);
            }
        });
    }

    render() {
        const { useSearchTerms, isbn, terms, bookResultByIsbn, bookResultsByTerms} = this.state;
        return (
            <div>
                <br />
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        useSearchTerms ?
                        <button className="btn btn-info" onClick={this.toggleSearch}> Search by ISBN </button>
                        :
                        <button className="btn btn-info" onClick={this.toggleSearch}> Search by Terms </button>
                    }
                    <div className="card-body">
                        <form>
                            {
                                useSearchTerms ?
                                    <div className="text-center form-group">
                                        <label>Enter terms separated by a space</label>
                                        <input placeholder="Enter terms" name="terms" className="text-center form-control"
                                            value={terms} onChange={this.onChangeTermsHandler} />
                                        <br />
                                        <button className="btn btn-info" onClick={this.searchByTerms}> Search </button>
                                    </div>
                                    :
                                    <div className="text-center form-group">
                                        <label>Find a book by ISBN</label>
                                        <input placeholder="Paste ISBN here" name="isbn" className="text-center form-control"
                                            value={isbn} maxLength="13" onChange={this.onChangeIsbnHandler} />
                                    </div>
                            }
                        </form>
                    </div>
                </div>
                {
                    useSearchTerms ?
                        <DisplayBooks books={bookResultsByTerms}></DisplayBooks>
                        :
                        <DisplayBook book={bookResultByIsbn}></DisplayBook>
                }
                <br />
                {/* <button className="btn btn-success" onClick={() => this.saveBook(book)}> Add Book </button> */}
            </div>
        );
    }
}

export default DisplayBookComponent;