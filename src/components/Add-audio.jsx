import React, { useRef } from "react";
import "../Style/add-audio.css";
import { connect } from 'react-redux';

const AddAudio = ({ audioRef, setAudioSrc, setAudioName, setAudioArtist }) => {

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        let name = event.target.files[0].name;
        name = name.slice(0, name.lastIndexOf("."));
        if (name.length > 14) name = name.slice(0, 11) + "..";

        if (selectedFile) {
            const fileURL = URL.createObjectURL(selectedFile);
            audioRef.src = fileURL;
            setAudioName(name);
            audioRef.addEventListener("canplaythrough", function () {
                // Play the audio
                audioRef.play();
            });
        }
    };

    const audioInput = useRef()
    return (
        <div>
            <div className='add-audio' onClick={() => { audioInput.current.click() }}>
                <img src="./Icons/plus.svg" alt=""></img>
            </div>
            <input type="file" id="audioInput" className="audioInput" accept="audio/*" onChange={handleFileChange} ref={audioInput}></input>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddAudio);