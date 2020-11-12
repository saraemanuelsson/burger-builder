import React from "react"
import "./ToolBar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"

const ToolBar = (props) => {

    return (
        <header className="toolBar">
            <div>MENU</div>
            <Logo height="80%"/>
            <nav className="desktopOnly">
                <NavigationItems />
            </nav>
        </header>
    )

}

export default ToolBar