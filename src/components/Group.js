import { Menu } from "./Menubar"
import "../Style/Group.css"

export default function Groups() {
    return (
        <div className="group-container">
            <div className="heading">Groups</div>
            <Menu img={"./Icons/paint-palette.png"} menuName={"Daily Beats"} />
            <Menu img={"./Icons/user.svg"} menuName={"A Group"} />
            <Menu img={"./Icons/paint-palette.png"} menuName={"Minimal Sound"} />
        </div>
    )
}