import React, { Component } from 'react';

class updateBookComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: '',
            bookStatus: ''
        }
    }

    onChangePageNumberHandler = (event) => {
        this.setState({ pageNumber: event.target.value });
    }

    onChangeStatuHandler = (event) => {
        this.setState({ bookStatus: event.target.value });
    }

    render() {
        const { pageNumber, bookStatus } = this.state;
        return (
            <div>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Update the page number you read to:</label>
                                <input placeholder="0" name="pageNumber" className="form-control"
                                    value={pageNumber} onChange={this.onChangePageNumberHandler} />
                            </div>
                            <div className="form-group">
                                <label>Update book status:</label>
                                <input placeholder="Book status" name="bookStatus" className="form-control"
                                    value={bookStatus} onChange={this.onChangeStatuHandler} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default updateBookComponent;