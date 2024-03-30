import "../Style/Mini-Music-Player.css"
import MusicThumbnail from "./Thumbnail"
import React, { memo, useCallback, useEffect, useState } from "react"
import { connect } from 'react-redux';

const MiniMusicPlayer = ({ audioRef, audioThumbnailSrc = "./Icons/Music-icon3.jpg", audioName = "Unknown", audioArtist = "unknown" }) => {

    if (audioThumbnailSrc === "") audioThumbnailSrc = "./Icons/Music-icon3.jpg";
    if (audioName === "") audioName = "Unknown";
    if (audioArtist === "") audioArtist = "unknown";

    return (
        <div className="mini-music-player">
            <MusicThumbnail thumbnail={audioThumbnailSrc} createDot={true} />
            <MusicDetails musicName={audioName} musicAuthor={audioArtist} />
            <Controls audioRef={audioRef} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        audioRef: state.audioRef,
        audioThumbnailSrc: state.audioThumbnailSrc,
        audioName: state.audioName,
        audioArtist: state.audioArtist,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniMusicPlayer)

function MusicDetails({ musicName = "Unknown", musicAuthor = "unknown" }) {

    if (musicName === "") musicName = "Unknown";
    if (musicAuthor === "") musicAuthor = "unknown";

    return (
        <div className="music-details">
            <div className="music-name">{musicName}</div>
            <div className="music-author">{musicAuthor}</div>
        </div>
    )
}

const Controls = memo(({ audioRef }) => {
    const [playPauseIcon, setPlayPauseIcon] = useState("./Icons/Play.svg");

    useEffect(() => {
        if (audioRef.paused) setPlayPauseIcon("./Icons/Play.svg");
        else setPlayPauseIcon("./Icons/Pause.svg");
    }, [audioRef.paused, audioRef])

    function playPauseBtnClickHandler() {
        if (audioRef.paused) {
            audioRef.play();
            setPlayPauseIcon("./Icons/Pause.svg");
        } else {
            audioRef.pause();
            setPlayPauseIcon("./Icons/Play.svg");
        }
    }

    function forward(value) {
        audioRef.currentTime += value;
    }

    return (
        <div className="music-control-container">
            <ProgressBar audioRef={audioRef} />
            <div className="music-controls">
                <img src="./Icons/fast-backward.svg" alt="" className="music-control" onClick={() => { forward(-10) }} />
                <img src={playPauseIcon} alt="" className="music-control" onClick={playPauseBtnClickHandler} />
                <img src="./Icons/fast-forward.svg" alt="" className="music-control" onClick={() => { forward(10) }} />
            </div>
        </div>
    )
})

const ProgressBar = memo(({ audioRef }) => {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        audioRef.addEventListener("loadedmetadata", () => {
            setDuration(audioRef.duration)
        })
        audioRef.addEventListener("timeupdate", () => {
            setCurrentTime(audioRef.currentTime)
        })
    }, [audioRef])

    const convertToMinutes = useCallback((duration) => {
        let minutes = duration / 60;
        let seconds = duration % 60;
        return `${minutes.toFixed(0)}:${seconds.toFixed(0)}`;
    }, [])

    function setCurrentTimeBasedOnCursorLocation(event) {
        const element = event.currentTarget;
        const relativeX = event.clientX - (element.getBoundingClientRect().left);
        audioRef.currentTime = (Math.floor((relativeX / element.offsetWidth) * duration))
    }

    return (
        <div className="progress-container">
            <div className="current-duration duration">{convertToMinutes(currentTime)}</div>
            <div className="progress-bar" onClick={setCurrentTimeBasedOnCursorLocation}>
                <div className="current-progress" style={{ width: (currentTime / duration) * 100 + '%' }}></div>
            </div>
            <div className="total-duration duration">{convertToMinutes(duration)}</div>
        </div>
    )
})