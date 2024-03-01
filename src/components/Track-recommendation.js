import MusicThumbnail from "./Thumbnail"
import "../Style/Track-recommendation.css"
import { connect } from "react-redux";

const TrackRecommendation = ({ audioRef, setAudioSrc, setAudioName, setAudioArtist }) => {
    return (
        <div className="track-recommendation-container">
            <div className="heading-font-size">Tracks selected for you</div>
            <div className="tracks-container">
                <Track trackName="Hare Hare Ya" trackDuration="3:26" audioRef={audioRef} audioSource="./Audio/Hare Hare Ya.mp3" setAudioSrc={setAudioSrc} setAudioName={setAudioName} setAudioArtist={setAudioArtist} />
                <Track trackName="Orange" trackDuration="6:50" audioRef={audioRef} audioSource="./Audio/Orange.mp3" setAudioSrc={setAudioSrc} setAudioName={setAudioName} setAudioArtist={setAudioArtist} />
                <Track trackName="Rubia cover by APimon VA" trackDuration="6:50" audioRef={audioRef} audioSource="./Audio/Rubia cover by Paimon VA lyrics Honkai Impact OST.mp3" setAudioSrc={setAudioSrc} setAudioName={setAudioName} setAudioArtist={setAudioArtist} />
                <Track trackName="Toradora! - Lost My Pieces" trackDuration="6:50" audioRef={audioRef} audioSource="./Audio/Toradora! - Lost My Pieces (OST).mp3" setAudioSrc={setAudioSrc} setAudioName={setAudioName} setAudioArtist={setAudioArtist} />

            </div>
        </div>
    )
}

function Track({ thumbnail = "../Icons/Music-icon3.jpg", trackName = "Unknown", trackAuthor = "unknown", trackDuration = "NaN", audioSource = "Not Defined", audioRef, setAudioSrc, setAudioName, setAudioArtist }) {

    if (thumbnail === "") thumbnail = "../Icons/Music-icon3.jpg";
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