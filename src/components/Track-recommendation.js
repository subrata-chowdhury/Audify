import MusicThumbnail from "./Thumbnail"
import "../Style/Track-recommendation.css"

export default function TrackRecommendation() {
    return (
        <div className="track-recommendation-container">
            <div className="heading-font-size">Tracks selected for you</div>
            <div className="tracks-container">
                <Track />
                <Track />
                <Track />
                <Track />

            </div>
        </div>
    )
}

function Track({ thumbnail = "../Icons/Music-icon3.jpg", trackName = "Unknown", trackAuthor = "unknown", trackTime = "NaN", audioSource = "Not Defined" }) {

    if(thumbnail === "") thumbnail = "../Icons/Music-icon3.jpg";
    if(audioSource === "") audioSource = "Not Defined";
    if(trackName === "") trackName = "Unknown";
    if(trackAuthor === "") trackAuthor = "unknown";
    if(trackTime === "") trackTime = "NaN";

    function setAudioSource(audioSource) {
        document.querySelector(".audio source").src = audioSource;
    }

    return (
        <div className="track-container normal-text-font-size" onClick={() => { setAudioSource(audioSource) }}>
            <MusicThumbnail thumbnail={thumbnail} className="mini-thumbnail" />
            <div className="track-name">{trackName}</div>
            <div className="track-author">{trackAuthor}</div>
            <div className="album-track-time">{trackTime}</div>
        </div>
    )
}