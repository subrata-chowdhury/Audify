import { MusicThumbnail } from "./Mini-Music-Player"
import "../Style/Album-recommendation.css"
import { SquareThumbnail } from "./Featured-artist"

export default function AlbumRecommendation() {
    return (
        <div className="Album-recommendation-container">
            <div>Album & sets selected for you</div>
            <div className="album-container">
                <Album />
                <Album />
            </div>
        </div>
    )
}

function Album() {
    return (
        <div className="album">
            <MusicThumbnail />
            <div className="album-details">
                <div className="album-name"></div>
                <div className="album-author"></div>
            </div>
            <Track />
        </div>
    )
}

function Track({ trackName = "Unknown", trackAuthor = "unknown" }) {
    return (
        <div className="album-track-container">
            <SquareThumbnail />
            <div className="album-track-details">
                <div className="album-track-name">{trackName}</div>
                <div className="album-track-author">{trackAuthor}</div>
            </div>
        </div>
    )
}