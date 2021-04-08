import React from 'react';

export default function DisplayBook(book){
    return (
        <div>
            <h2 className="text-center">Showing: {book.book.title}</h2>
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
                            <tr key={book.book.id}>
                                <td>{book.book.title}</td>
                                <td>{book.book.authors }</td>
                                <td>{book.book.genre}</td>
                                <td>{book.book.pageCount}</td>
                                <td>{book.book.publisher}</td>
                                <td>{book.book.indentifiers}</td>
                                <td>{book.book.pagesRead}</td>
                                <td>{book.book.status}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}