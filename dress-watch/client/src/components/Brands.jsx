import React, { Component } from 'react';
import BrandsList from './BrandsList.jsx';
import { getAllBrands } from '../services/brands.jsx';

export default class Brands extends Component {
  constructor(props) {
    super(props)
    this.state = {
      has_data: false,
      not_loaded: true
    }
  }

  componentDidMount = async () => {
    const brands = await getAllBrands();
    this.props.saveBrands(brands);
    try {
      const has_data = !!this.props.brandsData[0].name
      await this.setState({
        has_data: has_data,
        not_loaded: !has_data,
      })
    }
    catch(evt) {
      this.props.brandsData = brands
    }
  }

  loadData = async () => {
    try {
      const brands = await getAllBrands();
      this.props.saveBrands(brands);
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
    ? <BrandsList brands={this.props.brandsData} />
    : <h2>Loading</h2>
    return (
      <div className="MainContent">
      <h1>Brands</h1>
        {main}
      </div>
    )
  }

}
