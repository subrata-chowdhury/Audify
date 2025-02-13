import MusicThumbnail from "./Thumbnail"
import "../styles/Track-recommendation.css"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { memo } from "react";
import { setArtistName, setAudioName, setAudioSrc, setAudioThumbnailSrc } from "../lib/audioReducer";
import { defaultTracks } from "../lib/Data";
import { RootState } from "../lib/ReduxStore";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const TrackRecommendation = memo(({ albumName = "default" }: { albumName: string }) => {
    const dispatch = useDispatch();
    const audioSrc = useTypedSelector(state => state.audio.audioSrc);

    return (
        <div className="track-recommendation-container">
            <div className="heading-font-size">Tracks selected for you</div>
            <div className="tracks-container">
                {
                    (defaultTracks[albumName] && defaultTracks[albumName].length > 0) ? defaultTracks[albumName].filter(item => item.source !== audioSrc).map((track) => {
                        return (
                            <Track
                                trackName={track.name}
                                trackDuration={track.duration}
                                onClick={() => {
                                    dispatch(setAudioSrc(track.source))
                                    dispatch(setAudioName(track.name))
                                    dispatch(setArtistName("unknown"))
                                    dispatch(setAudioThumbnailSrc("./Icons/Music-icon3.jpg"))
                                }}
                                key={track.source} />
                        )
                    }) : <div>No tracks available</div>
                }
            </div>
        </div>
    )
})

export function Track({ thumbnail = "./Icons/Music-icon3.jpg", trackName = "Unknown", trackAuthor = "unknown", trackDuration = "0:0", onClick = () => { } }) {
    return (
        <div className="track-container normal-text-font-size" onClick={onClick}>
            <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: '0.3rem' }}>
                <MusicThumbnail thumbnail={thumbnail} className="mini-thumbnail" />
                <div className="track-name" title={trackName}>{trackName.length > 25 ? trackName.slice(0, 25) + ".." : trackName}</div>
            </div>
            <div className="track-author" title={trackAuthor}>{trackAuthor.length > 7 ? trackAuthor.slice(0, 7) + ".." : trackAuthor}</div>
            <div className="album-track-time">{trackDuration}</div>
        </div>
    )
}

export default TrackRecommendation;