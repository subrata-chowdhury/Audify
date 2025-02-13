import MusicThumbnail, { SquareThumbnail } from "./Thumbnail"
import "../styles/Album-recommendation.css"
import { memo } from "react";
import { defaultTracks } from "../lib/Data";
import { useDispatch } from "react-redux";
import { setArtistName, setAudioName, setAudioSrc, setAudioThumbnailSrc } from "../lib/audioReducer";
// import thumbnail from "../Assets/FRESHERBRINE.jpeg"

const defaultAlbumNames = [
    { name: "Demon Slayer", thumb: "./Audio/DemonSlayer/images.png" },
    { name: "Favourite", thumb: undefined },
    { name: "Doraemon", thumb: "./Audio/Doraemon/doraemon.jpg" }
]

function AlbumRecommendation({ openedAlbum = "Favourite", onClick = () => { } }: { openedAlbum: string, onClick: (albumName: string) => void }) {
    const dispatch = useDispatch()
    const albumNames = defaultAlbumNames.filter(item => item.name !== openedAlbum)

    return (
        <div className="album-recommendation-container">
            <div className="heading-font-size">Album & sets selected for you</div>
            <div className="album-container">
                {
                    albumNames.map((album) => {
                        return (
                            <Album
                                albumName={album.name}
                                albumTrackCount={defaultTracks[album.name].length}
                                trackName={defaultTracks[album.name][0].name}
                                thumbnail={album.thumb}
                                onClick={() => {
                                    onClick(album.name)

                                    dispatch(setAudioName(defaultTracks[album.name][0].name))
                                    dispatch(setAudioSrc(defaultTracks[album.name][0].source))
                                    dispatch(setArtistName("unknown"))
                                    dispatch(setAudioThumbnailSrc("./Icons/Music-icon3.jpg"))
                                }} key={album.name} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default memo(AlbumRecommendation)
interface AlbumProps {
    thumbnail?: string;
    albumName?: string;
    albumTrackCount?: number;
    trackThumbnail?: string;
    trackName: string;
    trackAuthor?: string;
    onClick?: () => void;
}

function Album({
    thumbnail = "./Icons/Music-icon3.jpg",
    albumName = "Unknown",
    albumTrackCount = 0,
    trackThumbnail,
    trackName,
    trackAuthor,
    onClick = () => { }
}: AlbumProps) {
    if (thumbnail === "") thumbnail = "./Icons/Music-icon3.jpg";
    if (albumName === "") albumName = "Unknown";
    // if (albumTrackCount === "") albumTrackCount = "NaN";

    return (
        <div className="album" onClick={onClick}>
            <MusicThumbnail thumbnail={thumbnail} createDot={true} />
            <div className="album-details">
                <div className="album-name">{albumName.length > 12 ? albumName.slice(0, 10) + ".." : albumName}</div>
                <div className="album-track-count">{albumTrackCount} Tracks</div>
            </div>
            <Track thumbnail={trackThumbnail} trackName={trackName} trackAuthor={trackAuthor} />
        </div>
    )
}

function Track({ thumbnail = "./Icons/Music-icon3.jpg", trackName = "Unknown", trackAuthor = "unknown" }) {

    if (thumbnail === "") thumbnail = "./Icons/Music-icon3.jpg";
    if (trackName === "") trackName = "Unknown";
    if (trackAuthor === "") trackAuthor = "unknown";

    return (
        <div className="album-track-container normal-text-font-size">
            <SquareThumbnail thumbnail={thumbnail} />
            <div className="album-track-details">
                <div className="album-track-name" title={trackName}>{trackName.length > 7 ? trackName.slice(0, 7) + ".." : trackName}</div>
                <div className="album-track-author">{trackAuthor.length > 7 ? trackAuthor.slice(0, 7) + ".." : trackAuthor}</div>
            </div>
        </div>
    )
}