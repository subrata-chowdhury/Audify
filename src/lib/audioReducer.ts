import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AudioState {
    audioThumbnailSrc: string;
    audioName: string;
    audioArtist: string;
    audioSrc: string;
    isPlaying: boolean;
    audioFrequency: number[];
}

const initialState: AudioState = {
    audioThumbnailSrc: "./Icons/FRESHERBRINE.jpeg",
    audioName: "Way Back Home",
    audioArtist: "unknown",
    audioSrc: "./Audio/Way Back Home.mp3",
    isPlaying: false,
    audioFrequency: [],
};

const audioReducer = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setAudioSrc: (state, action: PayloadAction<string>) => {
            state.audioSrc = action.payload;
        },
        setAudioThumbnailSrc: (state, action: PayloadAction<string>) => {
            state.audioThumbnailSrc = action.payload;
        },
        setAudioName: (state, action: PayloadAction<string>) => {
            state.audioName = action.payload;
        },
        setArtistName: (state, action: PayloadAction<string>) => {
            state.audioArtist = action.payload;
        },
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
    },
});

export const { setAudioSrc, setAudioName, setArtistName, setAudioThumbnailSrc, setIsPlaying } = audioReducer.actions;
export default audioReducer.reducer;