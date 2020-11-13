import React from "react"
import "./DrawerToggle.css"

const DrawerToggle = (props) => {

    return (
        <div className="drawerToggle" onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}

export default DrawerToggle