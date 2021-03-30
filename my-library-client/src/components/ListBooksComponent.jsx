import React, { Component } from 'react';

class ListBooksComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Book List</h2>
                <div className = "row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Pages</th>
                                <th>Publisher</th>
                                <th>ISBN</th>
                                <th>Pages Read</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr key = { book.id }>
                                        <td>{ book.title }</td>
                                        <td>{ book.authors }</td>
                                        <td>{ book.pages }</td>
                                        <td>{ book.publisher }</td>
                                        <td>{ book.isbn }</td>
                                        <td>{ book.pagesRead }</td>
                                        <td>{ book.status }</td>
                                    </tr>    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBooksComponent;