import React from 'react';

export default function ProductDetail(props) {
  const product = props.product
  const key = `PDKey-${product.id}`
  return (
      <div key={key}>
        <h2>{product.name}</h2>
        <p>details: {product.details}</p>
        <h3>price: ${product.price}</h3>
      </div>
  )
}
