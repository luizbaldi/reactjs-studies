export function selectBook(book) {
    console.log('Selecting a book');
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}