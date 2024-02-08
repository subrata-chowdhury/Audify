import "../Style/Featured-artist.css"

export default function FeaturedArtist() {
    return (
        <div className="featured-artist-container section">
            <div>Featured Track</div>
            <div className="artists-container">
                <Artist />
                <Artist />
                <Artist />
                <Artist />
            </div>
        </div>
    )
}

function Artist({ thumbnail, artistName = "Unknown" }) {
    return (
        <div className="artist">
            <SquareThumbnail />
            <div className="artist-name">{artistName}</div>
        </div>
    )
}

export function SquareThumbnail({ thumbnail = "./Icons/user.svg", className = "" }) {
    return (
        <div className="square-thumbnail-container">
            <img src={thumbnail} alt="thumbnail" className={"square-thumbnail " + className} />
            <img src={thumbnail} alt="thumbnail" className={"square-thumbnail-shadow " + className} />
        </div>
    )
}