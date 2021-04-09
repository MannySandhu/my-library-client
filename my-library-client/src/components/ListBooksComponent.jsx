import React, { Component } from 'react';
import BookService from '../services/BookService';

class ListBooksComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookList: []
        }

        this.deleteBook = this.deleteBook.bind(this);
        this.findBook = this.findBook.bind(this);
    }

    componentDidMount() {
        BookService.getAllBooks().then(res => {
            this.setState({ bookList: res.data });
        });
    }

    deleteBook(deleteBook){
        BookService.deleteBook(deleteBook.id).then(res => {
            console.log(`Deleted ${res}`);
            let updatedBookList = this.state.bookList.filter(book => book.id !== deleteBook.id);
            this.setState({bookList: updatedBookList});
        })
    }

    updateBook(book){
        this.props.history.push('/update/' + book.id + '/' + book.title + '/' + book.pagesRead + '/' + book.bookStatus);
    }

    findBook(){
        this.props.history.push('/search');
    }

    render() {
        const { bookList } = this.state;
        return (
            <div>
                <br />
                <div className="row">
                    <button className="btn btn-info" onClick={this.findBook}> Find a Book </button>
                    <h2 className="text-center offset-md-4">My Book List</h2>
                </div>
                <br />
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
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookList.map(book => {
                                    return (
                                        <tr key={book.id}>
                                            <td>{book.title}</td>
                                            <td>{}</td>
                                            <td>{}</td>
                                            <td>{book.pageCount}</td>
                                            <td>{book.publisher}</td>
                                            <td>{}</td>
                                            <td>{book.pagesRead}</td>
                                            <td>{book.bookStatus}</td>
                                            <td><button className="btn btn-info" onClick={() => this.updateBook(book)}>Update</button></td>
                                            <td><button className="btn btn-danger" onClick={() => this.deleteBook(book)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBooksComponent;