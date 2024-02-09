import MusicThumbnail, { SquareThumbnail } from "./Thumbnail"
import "../Style/Album-recommendation.css"
import thumbnail from "../Assets/FRESHERBRINE.jpeg"

export default function AlbumRecommendation() {
    return (
        <div className="Album-recommendation-container">
            <div className="heading-font-size">Album & sets selected for you</div>
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
            <MusicThumbnail thumbnail={thumbnail} createDot={true} />
            <div className="album-details">
                <div className="album-name">Unknown</div>
                <div className="album-track-count">NaN Tracks</div>
            </div>
            <Track />
        </div>
    )
}

function Track({ thumbnail = "../Icons/Music-icon3.jpg", trackName = "Unknown", trackAuthor = "unknown" }) {
    return (
        <div className="album-track-container normal-text-font-size">
            <SquareThumbnail thumbnail={thumbnail} />
            <div className="album-track-details">
                <div className="album-track-name">{trackName}</div>
                <div className="album-track-author">{trackAuthor}</div>
            </div>
        </div>
    )
}