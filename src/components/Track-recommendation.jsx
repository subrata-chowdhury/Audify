import MusicThumbnail from "./Thumbnail"
import "../Style/Track-recommendation.css"
import { useDispatch } from "react-redux";
import { memo } from "react";
import { setArtistName, setAudioName, setAudioSrc, setAudioThumbnailSrc } from "./audioReducer";

const TrackRecommendation = memo(() => {
    const dispatch = useDispatch();

    const tracks = [{
        name: "Hare Hare Ya",
        duration: "3:26",
        source: "./Audio/Hare Hare Ya.mp3"
    }, {
        name: "Orange",
        duration: "6:50",
        source: "./Audio/Orange.mp3"
    }, {
        name: "Rubia cover by APimon VA",
        duration: "3:26",
        source: "./Audio/Rubia cover by Paimon VA lyrics Honkai Impact OST.mp3"
    }, {
        name: "Toradora! - Lost My Pieces",
        duration: "6:50",
        source: "./Audio/Toradora! - Lost My Pieces (OST).mp3"
    }]

    return (
        <div className="track-recommendation-container">
            <div className="heading-font-size">Tracks selected for you</div>
            <div className="tracks-container">
                {
                    tracks.map((track) => {
                        return (
                            <Track
                                trackName={track.name}
                                trackDuration={track.duration}
                                onClick={() => {
                                    dispatch(setAudioSrc(track.source))
                                    dispatch(setAudioName(track.name))
                                    dispatch(setArtistName("unknown"))
                                    dispatch(setAudioThumbnailSrc("./Icons/Music-icon3.jpg"))
                                }}
                                key={track.source} />
                        )
                    })
                }
            </div>
        </div>
    )
})

function Track({ thumbnail = "./Icons/Music-icon3.jpg", trackName = "Unknown", trackAuthor = "unknown", trackDuration = "0:0", onClick = () => { } }) {
    return (
        <div className="track-container normal-text-font-size" onClick={onClick}>
            <MusicThumbnail thumbnail={thumbnail} className="mini-thumbnail" />
            <div className="track-name">{trackName}</div>
            <div className="track-author">{trackAuthor}</div>
            <div className="album-track-time">{trackDuration}</div>
        </div>
    )
}

export default TrackRecommendation;