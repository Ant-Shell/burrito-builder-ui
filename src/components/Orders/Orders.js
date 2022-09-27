import React from 'react';
import './Orders.css';
import Order from "../Order/Order"

const Orders = ({orders}) => {
  const orderEls = orders.map(order => {
    return (
      <Order 
      id={order.id}
      name={order.name}
      ingredients={order.ingredients}
      key={Date.now() + order.id}
      />
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;