import React from 'react'
import ReactDOM from 'react-dom'

/* Components */
import SearchBar from './components/SearchBar.jsx';

const youtubeKey = 'AIzaSyC7Weih-qcAk2hLldEqKy-JBi1KaSnSq_M';
 
const App = () => (
    <div>
        <span>Potatoe!</span>
        <SearchBar />
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)