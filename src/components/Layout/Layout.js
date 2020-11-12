import React from "react"
import Aux from "../../hoc/aux"
import "./Layout.css"
import ToolBar from "../Navigation/ToolBar/ToolBar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

const layout = (props) => (
    <Aux>
        <ToolBar />
        <SideDrawer />
        <main className="content">
            {props.children}
        </main>
    </Aux>
)


export default layout