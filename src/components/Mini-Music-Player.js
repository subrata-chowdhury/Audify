import thumbnail from "../Assets/FRESHERBRINE.jpeg"
import "../Style/Mini-Music-Player.css"

export default function MiniMusicPlayer() {
    return (
        <div className="mini-music-player">
            <MusicThumbnail thumbnail={thumbnail} />
            <MusicDetails musicName={"Way Back Home"} musicAuthor={"Unknown"}/>
            <Controls />
        </div>
    )
}

function MusicThumbnail({ thumbnail }) {
    return (
        <div className="music-thumbnail-container">
            <img src={thumbnail} alt="thumbnail" className="music-thumbnail" />
            <img src={thumbnail} alt="thumbnail" className="music-thumbnail-shadow" />
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
    return (
        <div className="music-control-container">
            <div className="progress-container">
                <div className="current-duration duration">naN</div>
                <div className="progress-bar">
                    <div className="current-progress"></div>
                </div>
                <div className="total-duration duration">naN</div>
            </div>
            <div className="music-controls">
                <img src="./Icons/fast-backward.svg" alt="" className="music-control"/>
                <img src="./Icons/play.svg" alt="" className="music-control"/>
                <img src="./Icons/fast-forward.svg" alt="" className="music-control"/>
            </div>
        </div>
    )
}