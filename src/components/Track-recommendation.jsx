import MusicThumbnail from "./Thumbnail"
import "../Style/Track-recommendation.css"
import { connect } from "react-redux";
import { memo } from "react";

const TrackRecommendation = memo(({ audioRef, setAudioSrc, setAudioName, setAudioArtist }) => {
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
    let trackElements = []
    for (let index = 0; index < tracks.length; index++) {
        trackElements.push(
            <Track trackName={tracks[index].name}
                trackDuration={tracks[index].duration}
                audioRef={audioRef}
                audioSource={tracks[index].source}
                setAudioSrc={setAudioSrc}
                setAudioName={setAudioName}
                setAudioArtist={setAudioArtist}
                key={index} />
        )
    }
    return (
        <div className="track-recommendation-container">
            <div className="heading-font-size">Tracks selected for you</div>
            <div className="tracks-container">
                {trackElements}
            </div>
        </div>
    )
})

function Track({ thumbnail = "./Icons/Music-icon3.jpg", trackName = "Unknown", trackAuthor = "unknown", trackDuration = "NaN", audioSource = "Not Defined", audioRef, setAudioSrc, setAudioName, setAudioArtist }) {

    if (thumbnail === "") thumbnail = "./Icons/Music-icon3.jpg";
    if (audioSource === "") audioSource = "Not Defined";
    if (trackName === "") trackName = "Unknown";
    if (trackAuthor === "") trackAuthor = "unknown";
    if (trackDuration === "") trackDuration = "NaN";

    async function setAudioSrcToNull() {
        audioRef.src = null;
    }

    async function setAudioSource() {
        await audioRef.pause();
        await setAudioSrcToNull();
        await setAudioSrc(audioSource);
        setAudioName(trackName);
        setAudioArtist(trackAuthor);
    }

    return (
        <div className="track-container normal-text-font-size" onClick={setAudioSource}>
            <MusicThumbnail thumbnail={thumbnail} className="mini-thumbnail" />
            <div className="track-name">{trackName}</div>
            <div className="track-author">{trackAuthor}</div>
            <div className="album-track-time">{trackDuration}</div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        audioRef: state.audioRef,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAudioSrc: (src) => dispatch({ type: 'SET_AUDIO_SRC', payload: src }), // Dispatch action to set audioRef
        setAudioName: (name) => dispatch({ type: 'SET_AUDIO_NAME', payload: name }), // Dispatch action to set audioRef
        setAudioArtist: (artist) => dispatch({ type: 'SET_ARTIST_NAME', payload: artist }), // Dispatch action to set audioRef
        // Add other action creators as needed
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrackRecommendation);