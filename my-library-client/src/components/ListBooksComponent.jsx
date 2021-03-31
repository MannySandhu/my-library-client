import React, { Component } from 'react';
import BookService from '../services/BookService';

class ListBooksComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookList: []
        }
    }

    componentDidMount() {
        BookService.getAllBooks().then(res => {
            this.setState({ bookList: res.data });
        });
    }

    render() {
        const { bookList } = this.state;
        return (
            <div>
                <h2 className="text-center">Book List</h2>
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