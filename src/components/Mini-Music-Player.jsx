import { useDispatch, useSelector } from "react-redux";
import "../Style/Mini-Music-Player.css"
import MusicThumbnail from "./Thumbnail"
import React, { memo, useCallback, useEffect, useRef, useState } from "react"
import { setIsPlaying } from "./audioReducer"

const MiniMusicPlayer = () => {
    const audioThumbnailSrc = useSelector(state => state.audio.audioThumbnailSrc)

    return (
        <div className="mini-music-player">
            <MusicThumbnail thumbnail={audioThumbnailSrc} createDot={true} />
            <MusicDetails />
            <Controls />
        </div>
    )
}

export default MiniMusicPlayer

const MusicDetails = memo(() => {
    const audioName = useSelector(state => state.audio.audioName)
    const audioArtist = useSelector(state => state.audio.audioArtist)

    return (
        <div className="music-details">
            <div className="music-name">{audioName}</div>
            <div className="music-author">{audioArtist}</div>
        </div>
    )
})

const Controls = memo(() => {
    const dispatch = useDispatch();
    const audioSrc = useSelector(state => state.audio.audioSrc)
    const isPlaying = useSelector(state => state.audio.isPlaying)

    const audioRef = useRef(new Audio("./Audio/Way Back Home.mp3"))

    const [repeat, setRepeat] = useState(false);
    const [volumeIcon, setVolumeIcon] = useState("./Icons/volume.svg")
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        audioRef.current.pause()
        audioRef.current.src = null;
        audioRef.current = new Audio(audioSrc)
        audioRef.current.play()
    }, [audioSrc])

    useEffect(() => {
        audioRef.current.addEventListener('ended', () => {
            if (repeat) {
                audioRef.current.play()
                dispatch(setIsPlaying(true))
            } else {
                audioRef.current.pause()
                dispatch(setIsPlaying(false))
            }
        })
        audioRef.current.addEventListener('play', () => {
            dispatch(setIsPlaying(true))
        })
        audioRef.current.addEventListener('pause', () => {
            dispatch(setIsPlaying(false))
        })

        audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration)
        })
        audioRef.current.addEventListener('timeupdate', () => {
            setCurrentTime(audioRef.current.currentTime)
        })

        return () => {
            audioRef.current.removeEventListener('ended', () => { })
            audioRef.current.removeEventListener('play', () => { })
            audioRef.current.removeEventListener('pause', () => { })

            audioRef.current.removeEventListener('metadata', () => { })
            audioRef.current.removeEventListener('timeupdate', () => { })
        }
    }, [audioSrc, audioRef.current, repeat])

    function playPauseBtnClickHandler() {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }

    function forward(value) {
        audioRef.current.currentTime += value;
    }

    return (
        <>
            {/* <VolumeContainer audioRef={audioRef} /> */}
            <div className="music-control-container">
                <ProgressBar
                    duration={duration}
                    currentTime={currentTime}
                    onSeek={(time) => {
                        audioRef.current.currentTime = time
                    }} />
                <div className="music-controls">
                    <img
                        src={volumeIcon}
                        alt=""
                        className="music-control"
                        onClick={() => {
                            if (audioRef.current.volume <= 0) {
                                setVolumeIcon("./Icons/volume.svg")
                                audioRef.current.volume = 1
                            } else {
                                setVolumeIcon("./Icons/volume-mute.svg")
                                audioRef.current.volume = 0
                            }
                        }} />
                    <img src="./Icons/fast-backward.svg" alt="" className="music-control" onClick={() => { forward(-10) }} />
                    <img
                        src={!isPlaying ? "./Icons/play.svg" : "./Icons/pause.svg"}
                        alt=""
                        className="music-control"
                        onClick={playPauseBtnClickHandler} />
                    <img src="./Icons/fast-forward.svg" alt="" className="music-control" onClick={() => { forward(10) }} />
                    <img
                        src={repeat ? "./Icons/arrow-repeat-all.svg" : "./Icons/arrow-repeat-all-off.svg"}
                        alt=""
                        className="music-control"
                        style={{ width: "15px", height: '15px', position: "relative", top: "-1.5px" }}
                        onClick={() => { setRepeat(val => !val) }} />
                </div>
            </div>
        </>
    )
})

const ProgressBar = memo(({ duration = 0, currentTime = 0, onSeek = () => { } }) => {
    const convertToMinutes = useCallback((duration) => {
        let minutes = duration / 60 || 0;
        let seconds = duration % 60 || 0;
        return `${minutes.toFixed(0)}:${seconds.toFixed(0)}`;
    }, [])

    function setCurrentTimeBasedOnCursorLocation(event) {
        const element = event.currentTarget;
        const relativeX = event.clientX - (element.getBoundingClientRect().left);
        onSeek(Math.floor((relativeX / element.offsetWidth) * duration));
    }

    return (
        <div className="progress-container">
            <div className="current-duration duration">{convertToMinutes(currentTime)}</div>
            <div className="progress-bar" onClick={setCurrentTimeBasedOnCursorLocation}>
                <div className="current-progress" style={{ width: (currentTime / duration) * 100 + '%' }}></div>
            </div>
            <div className="total-duration duration">{convertToMinutes(duration)}</div>
        </div>
    )
})

// const VolumeContainer = memo(() => {
//     return (
//         <div className="volume-container">
//             <div className="volume-bar">
//                 <div className="inner-bar" style={{ height: (100 * volume) + '%' }}></div>
//             </div>
//             <img src="./Icons/volume.svg" className="volume-icon"></img>
//         </div>
//     )
// })