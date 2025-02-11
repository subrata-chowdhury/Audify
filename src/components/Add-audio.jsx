import React, { useRef } from "react";
import "../Style/add-audio.css";
import { useDispatch } from 'react-redux';
import { setArtistName, setAudioName, setAudioSrc, setAudioThumbnailSrc } from "../lib/audioReducer";

const AddAudio = () => {
    const audioInput = useRef()

    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        let name = event.target.files[0].name;
        name = name.slice(0, name.lastIndexOf("."));

        if (selectedFile) {
            const fileURL = URL.createObjectURL(selectedFile);
            dispatch(setAudioSrc(fileURL));
            dispatch(setAudioName(name));
            dispatch(setAudioThumbnailSrc("./Icons/Music-icon3.jpg"));
            dispatch(setArtistName("unknown"));
        }
    };

    return (
        <div>
            <div className='add-audio' onClick={() => { audioInput.current.click() }}>
                <img src="./Icons/plus.svg" alt=""></img>
            </div>
            <input type="file" id="audioInput" className="audioInput" accept="audio/*" onChange={handleFileChange} ref={audioInput}></input>
        </div>
    )
}

export default AddAudio