import "../Style/Mini-Music-Player.css"
import { useState } from "react"

export default function MiniMusicPlayer({ thumbnail, trackName, trackAuthor }) {
    return (
        <div className="mini-music-player">
            <MusicThumbnail thumbnail={thumbnail} />
            <MusicDetails musicName={trackName} musicAuthor={trackAuthor} />
            <Controls />
        </div>
    )
}

export function MusicThumbnail({ thumbnail = "./Icons/user.svg", className = "" }) {
    return (
        <div className="music-thumbnail-container">
            <img src={thumbnail} alt="thumbnail" className={"music-thumbnail " + className} />
            <img src={thumbnail} alt="thumbnail" className={"music-thumbnail-shadow " + className} />
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

    function playPauseBtnClickHandler() {
        if (playPauseIcon === "./Icons/Play.svg") SetPlayPauseIcon("./Icons/Pause.svg");
        else SetPlayPauseIcon("./Icons/Play.svg");
    }

    return (
        <div className="music-control-container">
            <ProgressBar />
            <div className="music-controls">
                <img src="./Icons/fast-backward.svg" alt="" className="music-control" />
                <img src={playPauseIcon} alt="" className="music-control" onClick={playPauseBtnClickHandler} />
                <img src="./Icons/fast-forward.svg" alt="" className="music-control" />
            </div>
        </div>
    )
}

function ProgressBar() {
    return (
        <div className="progress-container">
            <div className="current-duration duration">naN</div>
            <div className="progress-bar">
                <div className="current-progress"></div>
            </div>
            <div className="total-duration duration">naN</div>
        </div>
    )
}