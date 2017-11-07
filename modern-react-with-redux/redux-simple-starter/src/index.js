import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/* Components */
import SearchBar from './components/SearchBar.jsx'
import VideoList from './components/VideoList.jsx'
import VideoDetail from './components/VideoDetail.jsx'

/* Config */
import YTSearch from 'youtube-api-search'

const youtubeKey = 'AIzaSyC7Weih-qcAk2hLldEqKy-JBi1KaSnSq_M'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({ key: youtubeKey, term: 'Potatoe' }, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            }) 
        });
    }
    render() {
        return (
            <div>
                <span>Potatoe!</span>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        )
    }    
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)