import MusicThumbnail from "./Thumbnail"
import "../Style/Featured-track.css"
import React, { memo } from "react";
import { useSelector } from "react-redux";

const FeaturedTrack = () => {
    const audioName = useSelector(state => state.audio.audioName)
    const audioThumbnailSrc = useSelector(state => state.audio.audioThumbnailSrc)
    const audioFrequency = useSelector(state => state.audio.audioFrequency)
    const isPlaying = useSelector(state => state.audio.isPlaying)

    return (
        <div className="featured-track-container">
            <div className="heading-font-size">Featured Track</div>
            <div className="music-details-container">
                <MusicProgressBar audioFrequency={audioFrequency} />

                <div className="current-music">
                    <div className="current-music-thumbnail-container">
                        <MusicThumbnail thumbnail={audioThumbnailSrc} className="mini-thumbnail" />
                    </div>
                    <div className="current-music-details">
                        <div className="current-music-text">{isPlaying ? "Playing.." : "Paused"}</div>
                        <div className="current-music-name">{audioName.length > 14 ? audioName.slice(0, 11) + ".." : audioName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedTrack

const MusicProgressBar = memo(({ audioFrequency }) => {
    let frequencyLength = 70;
    let bars = [];
    for (var i = 0; i < frequencyLength; i++) {
        bars.push(<Bar h={((Math.random() * 100) + 5)} key={i} />)
    }

    return (
        <div className="music-progress-bar-container">
            {
                frequencyLength > 0 ? bars : <div className="no-music-playing">No music playing</div>
            }
        </div>
    )
})

function Bar({ h }) {
    return (
        <div className="bar">
            <div className="inner-bar" style={{ height: `${h}%`, top: `${100 - h}%` }}></div>
        </div>
    )
}