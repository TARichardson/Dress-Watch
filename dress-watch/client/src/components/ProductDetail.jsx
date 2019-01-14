import React from 'react';
const image = './Resource/atlas2-hand-375-mm-19565211_945900_ED_M.jpg';
export default function ProductDetail(props) {
  const product = props.product
  const key = `PDKey-${product.id}`
  return (
      <div key={key}>
        <img class="ProductPic"
       src={ image}
       alt="somsomsosmsomsom" />
        <h2>{product.name}</h2>
        <p>details: {product.details}</p>
        <h3>price: ${product.price}</h3>
      </div>
  )
}
