import { memo } from "react"
import "../styles/Menubar.css"

function Menubar() {
    return (
        <div className="menubar">
            <Menu img={"./Icons/dashboard.png"} menuName={"Dashboard"} />
            <Menu img={"./Icons/folder.png"} menuName={"Your Beats"} />
            <Menu img={"./Icons/direction.png"} menuName={"Exploreing"} />
            <Menu img={"./Icons/inbox.png"} menuName={"Inbox"} />
            <Menu img={"./Icons/user.svg"} menuName={"Artists"} />
            <Menu img={"./Icons/settings.png"} menuName={"Settings"} />
        </div>
    )
}

export default memo(Menubar)

interface MenuProps {
    img: string;
    menuName: string;
}

export function Menu({ img, menuName }: MenuProps) {
    return (
        <div className="menu normal-text-font-size">
            <img src={img} alt={menuName} className="icon" />
            <div>{menuName}</div>
        </div>
    )
}