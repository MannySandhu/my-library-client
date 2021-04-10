import React from 'react';

export default function DisplayBooks(books) {
    return (
        <div>
            <br />
            <h2 className="">Found: {books.books.length} Result(s))</h2>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.books.map(book => {
                                return(
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.authors }</td>
                                        <td>{book.genre}</td>
                                        <td>{book.pageCount}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.indentifiers}</td>
                                        <td><button className="btn btn-success text-center" onClick={() => console.log('saving: ')}> Add </button></td>
                                        <td><button className="btn btn-info text-center" onClick={() => console.log('Viewing: ')}> View </button></td>
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