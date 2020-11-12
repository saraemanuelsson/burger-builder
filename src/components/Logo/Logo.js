import React from "react"
import BurgerLogo from "../../assets/burger-logo.png"
import "./Logo.css"

const Logo = (props) => {
    return (
        <div className="logo" style={{height: props.height}}>
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    )
}

export default Logo