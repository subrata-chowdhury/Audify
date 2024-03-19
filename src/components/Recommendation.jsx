import TrackRecommendation from "./Track-recommendation";
import AlbumRecommendation from "./Album-recommendation";

import "../Style/Recommendation.css"

export default function Recommendation() {
    return (
        <div className="recommendation-container section">
            <TrackRecommendation />
            <AlbumRecommendation />
        </div>
    )
}