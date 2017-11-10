export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            state = action.payload;
            return state;
    }

    return state;
}