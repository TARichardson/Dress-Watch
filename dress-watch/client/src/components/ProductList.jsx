import React from 'react';
import ProductDetail from './ProductDetail.jsx';

export default function ProductList(props) {
  const products = props.products
  const pDetail = products.map( (product) =>{
    const divkey = `PDLK-${product.id}`
    return (
    <div key={divkey}>
      <ProductDetail product={product}/>
    </div>
  )}
)

  return (
    <div key='productList'>
      <h2>Product List</h2>
      {pDetail}
    </div>
  )
}
