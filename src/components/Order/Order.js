import React from "react"
import "./Order.css"

const Order = ({id, name, ingerdients}) => {
  return (
    <div className="order">
      <h3>{name}</h3>
      <ul className="ingredient-list">
        {ingerdients.map(ingredient => {
          return <li key={ingredient}>{ingredient}</li>
        })}
      </ul>
    </div>
  )
}


export default Order