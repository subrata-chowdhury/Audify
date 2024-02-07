import "../Style/Search-bar.css"

export function SearchBar() {
    return (
        <div className="search-bar-container">
            <img src="./Icons/music.svg" alt="music" className="music-icon" />
            <input type="text" className="search-music-input" placeholder="Search Here" />
        </div>
    )
}