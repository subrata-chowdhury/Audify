import React, { createContext, useContext, useRef, ReactNode } from 'react';

const AudioContext = createContext<{ audioRef: React.RefObject<HTMLAudioElement> } | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const audioRef = useRef<HTMLAudioElement>(new Audio());

    return (
        <AudioContext.Provider value={{ audioRef: audioRef }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = (): { audioRef: React.RefObject<HTMLAudioElement> } => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};