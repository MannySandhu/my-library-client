import React, { Component } from 'react';
import BookService from '../services/BookService';

class DisplayBookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isbn: this.props.match.params.isbn,
            book: []
        }
        this.saveBook = this.saveBook.bind(this);
    }

    componentDidMount() {
        const { isbn } = this.state;
        BookService.getBookByIsbn(isbn).then(res => {
            this.setState({ book: res.data });
        });
    }

    saveBook(book){
        console.log('saving book => ' + JSON.stringify(book))
        BookService.saveBook(book).then(res => {
            this.props.history.push('/books');
        })
    }

    render() {
        const { book } = this.state;
        return (
            <div>
                <h2 className="text-center">Showing: {book.title}</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Genre</th>
                                <th>Pages</th>
                                <th>Publisher</th>
                                <th>ISBN</th>
                                <th>Pages Read</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.authors }</td>
                                    <td>{book.genre}</td>
                                    <td>{book.pageCount}</td>
                                    <td>{book.publisher}</td>
                                    <td>{book.indentifiers}</td>
                                    <td>{book.pagesRead}</td>
                                    <td>{book.status}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <br />
                <button className="btn btn-primary" onClick={() => this.saveBook(book)}> Add Book </button>
            </div>
        );
    }
}

export default DisplayBookComponent; 