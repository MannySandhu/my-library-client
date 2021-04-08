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
        BookService.deleteBookById(deleteBook.id).then(res => {
            console.log(`Deleted ${res}`);
            let updatedBookList = this.state.bookList.filter(book => book.id !== deleteBook.id);
            this.setState({bookList: updatedBookList});
        })
    }

    updateBook(){
        this.props.history.push('/update');
    }

    findBook(){
        this.props.history.push('/search');
    }

    render() {
        const { bookList } = this.state;
        return (
            <div>
                <div className="row">
                    <h2 className="text-center offset-md-5">My Book List</h2>
                    <button className="offset-md-2 btn btn-primary" onClick={this.findBook}> Find Book </button>
                </div>
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
                                            <td>{book.status}</td>
                                            <td><button className="btn btn-info" onClick={() => this.deleteBook(book)}>Delete</button></td>
                                            <td><button className="btn btn-info" onClick={() => this.updateBook(book)}>Update</button></td>
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