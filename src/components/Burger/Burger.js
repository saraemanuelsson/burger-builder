import React from "react"
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient"
import "./Burger.css"

const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            })
        })

    return (
        <div className="burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )

}

export default Burger