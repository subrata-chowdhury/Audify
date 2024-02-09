import "../Style/Mini-Music-Player.css"
import MusicThumbnail from "./Thumbnail"
import { useEffect, useRef, useState } from "react"

export default function MiniMusicPlayer({ thumbnail, trackName, trackAuthor }) {
    return (
        <div className="mini-music-player">
            <MusicThumbnail thumbnail={thumbnail} createDot={true} />
            <MusicDetails musicName={trackName} musicAuthor={trackAuthor} />
            <Controls />
        </div>
    )
}

function MusicDetails({ musicName, musicAuthor }) {
    return (
        <div className="music-details">
            <div className="music-name">{musicName}</div>
            <div className="music-author">{musicAuthor}</div>
        </div>
    )
}

function Controls() {
    const [playPauseIcon, SetPlayPauseIcon] = useState("./Icons/Play.svg");
    const [currentTime, setCurrentTime] = useState('0')
    const [duration, setDuration] = useState('0')

    const audioRef = useRef(null)
    useEffect(() => {
        audioRef.current.addEventListener('loadeddata', () => {
            setDuration(audioRef.current.duration);
            audioRef.current.addEventListener("timeupdate", () => {
                setCurrentTime(audioRef.current.currentTime);
            })
        })

        audioRef.current.addEventListener("play", () => {
            document.querySelector(".current-music-text").innerHTML = "Playing...";
        })
        audioRef.current.addEventListener("pause", () => {
            document.querySelector(".current-music-text").innerHTML = "Paused";
        })
    })

    function playPauseBtnClickHandler() {
        if (playPauseIcon === "./Icons/Play.svg") {
            audioRef.current.play();
            SetPlayPauseIcon("./Icons/Pause.svg");
        } else {
            audioRef.current.pause();
            SetPlayPauseIcon("./Icons/Play.svg");
        }
    }

    function forward(value) {
        if (value > 0) audioRef.current.currentTime += value;
        else audioRef.current.currentTime -= value;
    }

    return (
        <div className="music-control-container">
            <ProgressBar duration={duration} curretDuration={currentTime} />
            <div className="music-controls">
                <img src="./Icons/fast-backward.svg" alt="" className="music-control" onClick={() => { forward(-10) }} />
                <img src={playPauseIcon} alt="" className="music-control" onClick={playPauseBtnClickHandler} />
                <img src="./Icons/fast-forward.svg" alt="" className="music-control" onClick={() => { forward(10) }} />
            </div>

            <audio className='audio' ref={audioRef}>
                <source src="./Audio/Way Back Home.mp3" type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    )
}

function ProgressBar({ curretDuration, duration }) {

    function convertToMinutes(duration) {
        let minutes = duration / 60;
        let seconds = duration % 60;
        return `${minutes.toFixed(0)}:${seconds.toFixed(0)}`;
    }

    return (
        <div className="progress-container">
            <div className="current-duration duration">{convertToMinutes(curretDuration)}</div>
            <div className="progress-bar">
                <div className="current-progress" style={{ width: (curretDuration / duration) * 100 + '%' }}></div>
            </div>
            <div className="total-duration duration">{convertToMinutes(duration)}</div>
        </div>
    )
}