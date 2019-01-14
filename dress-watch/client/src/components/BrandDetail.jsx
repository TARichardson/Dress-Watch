import React from 'react';

export default function BrandDetail(props) {
  const brand = props.brand
  const key = `RDKey-${brand.id}`
  return (
    <div key={key} className="BrandDetail">
      <div className="BrandName">
        <h2>{brand.name}</h2>
      </div>
      <div className="BrandImg">
        <img src={brand.logo} alt={`brand logo ${brand.id}`}/>
      </div>
      <div className="BrandWebsite">
        <h3>website : </h3>
        </div>
        <div className="BramdWebData">
          <h3>{brand.website}</h3>
        </div>
        <div className="BrandAbout">
          <h3>about : </h3>
        </div>
        <div className="BrandAboutData">
          <h3>{brand.about}</h3>
        </div>
        <div className="BrandQuarters">
          <h3>head_quarters : </h3>
        </div>
        <div className="BrandQuartersData">
          <h3>{brand.head_quarters}</h3>
        </div>
        <div className="BrandFounder">
          <h3>founder : </h3>
        </div>
        <div className="BrandFounderData">
          <h3>{brand.founder}</h3>
        </div>
        <div className="BrandFounded">
          <h3>founded : </h3>
        </div>
        <div className="BrandFoundedData">
          <h3>{brand.founded}</h3>
        </div>
      </div>
    )
  }
