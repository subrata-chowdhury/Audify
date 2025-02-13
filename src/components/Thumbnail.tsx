
import { memo } from "react";
import "../styles/Thumbnail.css"

interface MusicThumbnailProps {
    thumbnail: string;
    className?: string;
    createDot?: boolean;
}

function MusicThumbnail({ thumbnail, className = "", createDot = false }: MusicThumbnailProps) {
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        backgroundImage: `url(${thumbnail})`,
    };
    const spanStyle: React.CSSProperties = {
        content: `url(${thumbnail})`,
    };
    const commonStyle: React.CSSProperties = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="thumbnail-container">
            <div style={{ position: 'relative' }}>
                <div className={"thumbnail circle " + className} style={{ ...containerStyle, ...commonStyle }}></div>
                <span style={{ ...spanStyle, ...commonStyle }} className={"thumbnail-shadow circle " + className}></span>
                {createDot ? <Dot /> : ""}
            </div>
        </div>
    )
}

export default memo(MusicThumbnail)

interface SquareThumbnailProps {
    thumbnail: string;
    className?: string;
}

export const SquareThumbnail = memo(({ thumbnail, className = "" }: SquareThumbnailProps) => {
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        backgroundImage: `url(${thumbnail})`,
    };
    // const spanStyle = {
    //     content: `url(${thumbnail})`,
    // };
    const commonStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="thumbnail-container">
            <div style={{ position: 'relative' }}>
                <div className={"thumbnail square " + className} style={{ ...containerStyle, ...commonStyle }} ></div>
                {/* <span style={{ ...spanStyle, ...commonStyle }} className={"thumbnail-shadow square " + className}></span> */}
            </div>
        </div>
    )
})

function Dot() {
    return (
        <div className="thumbnail-dot"></div>
    )
}