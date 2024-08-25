import "../Style/Featured-artist.css"
import { SquareThumbnail } from "./Thumbnail"

export default function FeaturedArtist() {
    return (
        <div className="featured-artist-container">
            <div className="heading-font-size">Featured Artists</div>
            <div className="artists-container">
                <Artist />
                <Artist />
                <Artist />
                <Artist />
            </div>
        </div>
    )
}

function Artist({ thumbnail = "./Icons/Artist.png", artistName = "Unknown" }) {
    return (
        <div className="artist normal-text-font-size">
            <SquareThumbnail thumbnail={thumbnail} />
            <div className="artist-name">{artistName}</div>
        </div>
    )
}