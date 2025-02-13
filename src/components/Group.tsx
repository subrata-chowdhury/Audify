import { Menu } from "./Menubar"
import "../styles/Group.css"

export default function Groups() {
    return (
        <div className="group-container">
            <div className="heading heading-font-size">Groups</div>
            <Menu img={"./Icons/paint-palette.png"} menuName={"Daily Beats"} />
            <Menu img={"./Icons/user.svg"} menuName={"A Group"} />
            <Menu img={"./Icons/Music-icon.png"} menuName={"Minimal Sound"} />
        </div>
    )
}