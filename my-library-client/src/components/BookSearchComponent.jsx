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
        this.onChangeIsbnHandler = this.onChangeIsbnHandler.bind(this);
    }

    saveBook(book) {
        if(book !== []){
            console.log('saving book => ' + JSON.stringify(book))
            BookService.saveBook(book).then(res => {
                this.props.history.push('/books');
            })
        }
    }

    onChangeIsbnHandler = (event) => {
        let input = event.target.value;
        this.setState({ isbn: input });
        if(input.length === 13){
            BookService.getBookByIsbn(input).then(res => {
                if(res.status === 200){
                    this.setState({ book: res.data});
                } else {
                    console.log(res.response);
                }
            });
        } else {
            this.setState({ book: [] });
        }
    }

    render() {
        const { book, isbn } = this.state;
        return (
            <div>
                <br />
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="text-center form-group">
                                <label>ISBN Search:</label>
                                <input placeholder="Paste ISBN here" name="isbn" className="text-center form-control"
                                    value={isbn} maxLength="13" onChange={this.onChangeIsbnHandler} />
                            </div>
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