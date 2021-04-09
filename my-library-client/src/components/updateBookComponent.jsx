import React, { Component } from 'react';
import BookService from '../services/BookService';

class updateBookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            title: this.props.match.params.title,
            pageNumber: this.props.match.params.pagesRead,
            bookStatus: this.props.match.params.bookStatus
        }

        this.onChangePageNumberHandler = this.onChangePageNumberHandler.bind(this);
        this.onChangeStatuHandler = this.onChangeStatuHandler.bind(this);
        this.updateBookDetails = this.updateBookDetails.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    onChangePageNumberHandler = (event) => {
        this.setState({ pageNumber: event.target.value });
    }

    onChangeStatuHandler = (event) => {
        this.setState({ bookStatus: event.target.value });
    }

    updateBookDetails = (e) => {
        e.preventDefault();
        const { id, pageNumber, bookStatus } = this.state;
        BookService.updateBook(id, pageNumber, bookStatus).then(res => {
            this.props.history.push('/');
        });
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        const { title, pageNumber, bookStatus } = this.state;
        return (
            <div>
                <br />
                <h2 className="text-center">{title}</h2>
                <br />
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Enter the page number you read to:</label>
                                <input placeholder="Page number" name="pageNumber" className="form-control"
                                    value={pageNumber} onChange={this.onChangePageNumberHandler} />
                            </div>
                            <div className="form-group">
                                <label>Update book status:</label>
                                <input placeholder="Your note" name="bookStatus" className="form-control"
                                    value={bookStatus} onChange={this.onChangeStatuHandler} />
                            </div>
                            <button className="btn btn-success" onClick={this.updateBookDetails}>Accept</button>
                            <button className="offset-md-1 btn btn-danger" onClick={this.cancel}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default updateBookComponent;