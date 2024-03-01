const initialState = {
    audioThumbnailSrc: "./Icons/FRESHERBRINE.jpeg",
    audioName: "Way Back Home",
    audioArtist: "unknown",
    audioRef: new Audio("./Audio/Way Back Home.mp3"), // Add audioRef to the initial state
    audioFrequency: [],
};

const audioReducer = (state = initialState, action) => {

    function setNewAudio(src) {
        let audio = new Audio(src);
        audio.play();
        return audio;
    }

    switch (action.type) {
        case 'SET_AUDIO_SRC':
            return { ...state, audioRef: setNewAudio(action.payload) };
        case 'SET_AUDIO_THUMBNAIL_SRC':
            return { ...state, audioThumbnailSrc: action.payload }
        case 'SET_AUDIO_NAME':
            return { ...state, audioName: action.payload }
        case 'SET_ARTIST_NAME':
            return { ...state, audioArtist: action.payload }
        default:
            return state;
    }
};

export default audioReducer;
