import React from 'react';

export default function BrandDetail(props) {
  const brand = props.brand
  const key = `RDKey-${brand.id}`
  return (
    <div key={key}>
      <h2>{brand.name}</h2>
      <image url={brand.logo}/>
      <h3>website : {brand.website}</h3>
      <h3>about : {brand.about}</h3>
      <h3>head_quarters : {brand.head_quarters}</h3>
      <h3>founder : {brand.founder}</h3>
      <h3>founded : {brand.founded}</h3>
    </div>
  )
}
