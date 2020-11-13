import React from "react"
import "./ToolBar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const ToolBar = (props) => {

    return (
        <header className="toolBar">
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo height="80%"/>
            <nav className="desktopOnly">
                <NavigationItems />
            </nav>
        </header>
    )

}

export default ToolBar