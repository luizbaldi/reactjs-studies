const selectUser = (user) => {
    console.log(`Selected user: ${user.first}`);
    return {
        type: 'SELECT_USER',
        payload: user
    };
};

export default selectUser;

