import React from "react"
import Aux from "../../hoc/aux"
import "./Layout.css"
import ToolBar from "../Navigation/ToolBar/ToolBar"

const layout = (props) => (
    <Aux>
        <ToolBar/>
        <main className="content">
            {props.children}
        </main>
    </Aux>
)


export default layout