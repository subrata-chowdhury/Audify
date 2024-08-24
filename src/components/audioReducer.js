import { createSlice } from '@reduxjs/toolkit';

const audioReducer = createSlice({
    name: 'audio',
    initialState: {
        audioThumbnailSrc: "./Icons/FRESHERBRINE.jpeg",
        audioName: "Way Back Home",
        audioArtist: "unknown",
        audioSrc: "./Audio/Way Back Home.mp3",
        isPlaying: false,
        audioFrequency: [],
    },
    reducers: {
        setAudioSrc: (state, action) => {
            state.audioSrc = action.payload;
        },
        setAudioThumbnailSrc: (state, action) => {
            state.audioThumbnailSrc = action.payload;
        },
        setAudioName: (state, action) => {
            let name = action.payload;
            if (name.length > 14) name = name.slice(0, 11) + "..";
            state.audioName = name;
        },
        setArtistName: (state, action) => {
            state.audioArtist = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
    },
});

export const { setAudioSrc, setAudioName, setArtistName, setAudioThumbnailSrc, setIsPlaying } = audioReducer.actions;
export default audioReducer.reducer;