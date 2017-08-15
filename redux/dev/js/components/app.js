import React from 'react';
import UserList from './userList';
import UserDetail from './userDetail';

const App = () => (
    <div>
        <h2>Username list:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail />
    </div>
);

export default App;