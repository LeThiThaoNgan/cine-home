import React from 'react'
import VideoPlayer from "react-video-js-player";
import './video.css'

function MovieLink(){
    return(
        <div className="mov-container">
            <div className="mov-wrapper">
                <VideoPlayer
                src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" 
                poster= "moviePoster/Queen.jpg"
                width="573" 
                height="330"
                playbackRates={[0.5, 1, 2, 4, 16]} > 
                </VideoPlayer>
            </div>
        </div>
    )
}

export default MovieLink