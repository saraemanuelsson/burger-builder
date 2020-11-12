import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import "./SideDrawer.css"

const SideDrawer = (props) => {



    return (
        <div className="sideDrawer">
            <Logo height="11%" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )

}

export default SideDrawer