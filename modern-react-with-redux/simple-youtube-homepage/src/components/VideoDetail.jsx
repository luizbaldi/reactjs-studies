import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    
    const url = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail