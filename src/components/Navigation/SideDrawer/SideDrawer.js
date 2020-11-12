import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import Backdrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/aux"
import "./SideDrawer.css"

const SideDrawer = (props) => {

    const attachedClass = props.open ? "open" : "close"

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={"sideDrawer " + attachedClass}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )

}

export default SideDrawer