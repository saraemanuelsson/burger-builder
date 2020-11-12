import React from "react"
import "./BuildControl.css"

const BuildControl = (props) => {

    return (
        <div className="buildControl">
            <div className="label" >{props.label}</div>
            <button className="less" >Less</button>
            <button className="more" >More</button>
        </div>
    )

}

export default BuildControl