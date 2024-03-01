import MusicThumbnail from "./Thumbnail"
import "../Style/Featured-track.css"
import React, { useState } from "react";
import { connect } from 'react-redux';

const FeaturedTrack = ({ audioRef, audioThumbnailSrc = "../Icons/Music-icon3.jpg", audioName = "Unknown" }) => {

    if (audioThumbnailSrc === "") audioThumbnailSrc = "../Icons/Music-icon3.jpg";
    if (audioName === "") audioName = "Unknown";

    const [playPauseText, setPlayPauseIcon] = useState("Paused");
    audioRef.addEventListener("play", () => {
        setPlayPauseIcon("Playing..");
    })
    audioRef.addEventListener("pause", () => {
        setPlayPauseIcon("Paused");
    })

    return (
        <div className="featured-track-container section">
            <div className="heading-font-size">Featured Track</div>
            <div className="music-details-container">
                <MusicProgressBar audioRef={audioRef} />

                <div className="current-music">
                    <div className="current-music-thumbnail-container">
                        <MusicThumbnail thumbnail={audioThumbnailSrc} className={"mini-thumbnail"} />
                    </div>
                    <div className="current-music-details">
                        <div className="current-music-text">{playPauseText}</div>
                        <div className="current-music-name">{audioName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        audioRef: state.audioRef,
        audioThumbnailSrc: state.audioThumbnailSrc,
        audioName: state.audioName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedTrack)

function MusicProgressBar({ audioRef }) {

    function Bar({ h }) {
        return (
            <div className="bar">
                <div className="inner-bar" style={{ height: `${h}%`, top: `${100 - h}%` }}></div>
            </div>
        )
    }

    let bars = [];
    bars = [];
    for (var i = 0; i < 74; i++) {
        bars.push(<Bar h={((Math.random() * 100) + 5)} key={i} />)
    }

    return (
        <div className="music-progress-bar-container">
            {bars}
        </div>
    )
}