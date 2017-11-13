const activeUserReducer = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_USER':
            return action.payload;
    }

    return state;
};

export default activeUserReducer;