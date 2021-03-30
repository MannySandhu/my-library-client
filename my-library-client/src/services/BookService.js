import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/api/v1";

class BookService {

    getBookByIsbn(isbn) {
        return axios.get(BOOK_API_BASE_URL + "/books/isbn/" + isbn);
    }

    saveBook(book) { 
        return axios.post(BOOK_API_BASE_URL + "/books", book)
    }

}

export default new BookService();