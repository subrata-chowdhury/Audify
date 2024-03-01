import MusicThumbnail, { SquareThumbnail } from "./Thumbnail"
import "../Style/Album-recommendation.css"
// import thumbnail from "../Assets/FRESHERBRINE.jpeg"

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

function Album({ thumbnail = "../Icons/Music-icon3.jpg", albumName = "Unknown", albumTrackCount = "NaN", trackThumbnail, trackName, trackAuthor }) {

    if (thumbnail === "") thumbnail = "../Icons/Music-icon3.jpg";
    if (albumName === "") albumName = "Unknown";
    if (albumTrackCount === "") albumTrackCount = "NaN";

    return (
        <div className="album">
            <MusicThumbnail thumbnail={thumbnail} createDot={true} />
            <div className="album-details">
                <div className="album-name">{albumName}</div>
                <div className="album-track-count">{albumTrackCount} Tracks</div>
            </div>
            <Track thumbnail={trackThumbnail} trackName={trackName} trackAuthor={trackAuthor} />
        </div>
    )
}

function Track({ thumbnail = "../Icons/Music-icon3.jpg", trackName = "Unknown", trackAuthor = "unknown" }) {

    if (thumbnail === "") thumbnail = "../Icons/Music-icon3.jpg";
    if (trackName === "") trackName = "Unknown";
    if (trackAuthor === "") trackAuthor = "unknown";

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