import React, { Component } from "react"
import Aux from "../../hoc/aux"
import "./Layout.css"
import ToolBar from "../Navigation/ToolBar/ToolBar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    render () {
        return (
            <Aux>
                <ToolBar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout