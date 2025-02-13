// store.js
import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './audioReducer.js';

const store = configureStore({
    reducer: {
        audio: audioReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
