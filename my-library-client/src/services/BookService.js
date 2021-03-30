import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/api/v1/books/search/isbn";

class BookService {

    getBookByIsbn(isbn){
        return axios.get(BOOK_API_BASE_URL + "/" + isbn);
    }

}

export default new BookService();