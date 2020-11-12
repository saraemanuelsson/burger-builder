import React, { Component } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

import Aux from "../../hoc/aux"

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(ingredientKey => {
            return ingredients[ingredientKey]
        }).reduce((sum, el) => {return sum + el}, 0)
        this.setState({ purchaseable: sum > 0 })
    }

    purchasedHandler = () => {
        this.setState({purchasing: true})
    }

    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return
        }
        const newCount = this.state.ingredients[type] - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice - priceDeduction
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchaseable={this.state.purchaseable}
                    disabled={disabledInfo}
                    ordered={this.purchasedHandler}
                />
            </Aux>
        )
    }

}

export default BurgerBuilder