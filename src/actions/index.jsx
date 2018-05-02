const books = [
    {
        id: 1,
        name: 'book01'
    },
    {
        id: 2,
        name: 'book02'
    },
    {
        id: 3,
        name: 'book03'
    },
    {
        id: 4,
        name: 'book04'
    }
];

export function getBooks() {
    return {
        type: 'GET_BOOKS',
        payload: books
    };
}

export function getBook(id) {

    const book = books.find(b => b.id === id);

    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}