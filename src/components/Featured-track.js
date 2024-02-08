import { MusicThumbnail } from "./Mini-Music-Player";
import "../Style/Featured-track.css"

export default function FeaturedTrack({ thumbnail, trackName }) {
    return (
        <div className="featured-track-container section">
            <div>Featured Track</div>
            <div className="music-details-container">
                <MusicProgressBar />

                <div className="current-music">
                    <div className="current-music-thumbnail-container">
                        <MusicThumbnail thumbnail={thumbnail} className={"mini-thumbnail"} />
                    </div>
                    <div className="current-music-details">
                        <div className="current-music-text">Playing...</div>
                        <div className="current-music-name">{trackName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MusicProgressBar() {
    return (
        <div className="music-progress-bar-container">

        </div>
    )
}