import React from "react"
import "./Order.css"

const Order = ({id, name, ingredients}) => {
  return (
    <div className="order">
      <h3>{name}</h3>
      <ul className="ingredient-list">
        {ingredients.map(ingredient => {
          return <li key={id}>{ingredient}</li>
        })}
      </ul>
    </div>
  )
}


export default Order