import React, { Component } from 'react';
//import BookService from '../services/BookService';

class ListBooksComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: []
        }
    }

    componentDidMount() {
        // BookService.getBookByIsbn("9780545010221").then(res => {
        //     this.setState({ book: res.data });
        // });

    }

    render() {
        const { book } = this.state;
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
            </div>
        );
    }
}

export default ListBooksComponent;