import React from 'react';
import VideoListItem from './VideoListItem'

const VideoList = ({ videos, onVideoSelect }) => (
    <ul className="col-md-4 list-group">
        {videos.map((video, idx) => {
            return (
                <VideoListItem 
                    key={video.etag}
                    video={video}
                    onVideoSelect={onVideoSelect}
                />
            )
        })}
    </ul>
)

export default VideoList