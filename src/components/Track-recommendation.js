import { MusicThumbnail } from "./Mini-Music-Player"
import "../Style/Track-recommendation.css"

export default function TrackRecommendation() {
    return (
        <div className="track-recommendation-container">
            <div>Tracks selected for you</div>
            <div className="tracks-container">
                <Track />
                <Track />
                <Track />
                <Track />

            </div>
        </div>
    )
}

function Track({ thumbnail, trackName = "Unknown", trackAuthor = "unknown" }) {
    return (
        <div className="track-container">
            <MusicThumbnail thumbnail={thumbnail} className="mini-thumbnail" />
            <div className="track-name">{trackName}</div>
            <div className="track-author">{trackAuthor}</div>
        </div>
    )
}