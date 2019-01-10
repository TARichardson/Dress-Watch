import React, { Component } from 'react';
import ProductList from './ProductList.jsx';
import { getAllProducts } from '../services/products.jsx';

export default class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      has_data: false,
      not_loaded: true
    }
  }

  componentDidMount = async () => {
    const products = await getAllProducts();
    this.props.saveProducts(products);
    try {
      const has_data = !!this.props.productsData[0].name
      await this.setState({
        has_data: has_data,
        not_loaded: !has_data,
      })
    }
    catch(evt) {
      this.props.productsData = products
    }
  }

  loadData = async () => {
    try {
      const products = await getAllProducts();
      this.props.saveProducts(products);
      await this.setState({
        has_data: true,
        not_loaded: false,
      });
    }
    catch(evt) {
      console.log(evt)
    }
  }
  render() {
    if(this.state.not_loaded) {
      this.loadData()
    }
    const main = this.state.has_data
    ? <ProductList products={this.props.productsData} />
    : <h2>Loading</h2>
    return (
      <div>
      <h1>Products</h1>
        {main}
      </div>
    )
  }

}
