import React from 'react';
import BrandDetail from './BrandDetail.jsx';

export default function BrandList(props) {
  const brands = props.brands
  const bDetail = brands.map( (brand) =>{
    const divkey = `RDLK-${brand.id}`
    return (
    <div key={divkey}>
      <BrandDetail brand={brand}/>
    </div>
  )}
)

  return (
    <div key='brandList'>
      <h2>Brand List</h2>
      {bDetail}
    </div>
  )
}
