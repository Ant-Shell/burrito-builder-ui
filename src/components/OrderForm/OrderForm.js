import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      error: false
    };
  }


  handleSubmit = e => {
    e.preventDefault();
    if(this.state.name === '' || !this.state.ingredients.length === 0) {
      this.setState({error: true})
    } else {
      this.props.postOrders(this.state.name, this.state.ingredients)
      this.clearInputs();
    }
  }

  handleNameChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  handleIngredientChange = (event) => {
    event.preventDefault()
    this.setState({ingredients: [...this.state.ingredients, event.target.name]})
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
        {this.state.error === true && <p className=".error">Please complete your order ...</p>}
      </form>
    )
  }
}

export default OrderForm;
