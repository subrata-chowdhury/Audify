import { useState } from "react"
import "../Style/Search-bar.css"

export default function SearchBar() {
    const [searchText, setSearchText] = useState("")
    return (
        <div className="search-bar-container">
            <img src="./Icons/music.svg" alt="music" className="music-icon" />
            <input type="text" className="search-music-input" placeholder="Search Here" value={searchText} onChange={e =>
                setSearchText(e.target.value)
            } />
        </div>
    )
}