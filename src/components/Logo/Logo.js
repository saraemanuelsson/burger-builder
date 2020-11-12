import React from "react"
import BurgerLogo from "../../assets/burger-logo.png"
import "./Logo.css"

const Logo = () => {
    return (
        <div className="logo">
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    )
}

export default Logo