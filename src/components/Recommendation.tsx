import TrackRecommendation from "./Track-recommendation";
import AlbumRecommendation from "./Album-recommendation";

import "../styles/Recommendation.css"
import { useState } from "react";

export default function Recommendation() {
    const [openedAlbum, setOpenedAlbum] = useState("Favourite")
    return (
        <div className="recommendation-container">
            <TrackRecommendation albumName={openedAlbum} />
            <AlbumRecommendation openedAlbum={openedAlbum} onClick={setOpenedAlbum} />
        </div>
    )
}