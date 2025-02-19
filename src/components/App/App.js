import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../Orders/Orders';
import OrderForm from '../OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [ ]
      }
    }
  

  componentDidMount() {
    getOrders()
    .then(data => this.setState({orders: data.orders}))
    .catch(err => console.error('Error fetching:', err));
  }

   postOrders = (name, ingredients) => {
    return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      body: JSON.stringify({name: name, ingredients: ingredients}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => this.setState({orders: [...this.state.orders, data]}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm postOrders={this.postOrders} orders/>
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
