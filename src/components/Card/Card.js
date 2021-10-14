import React from 'react'
import './Card.scss'

export default function Card({data}) {
  console.log(data)
  return (
    <div className="card--item">
      <div className="inner--card">
        <div className="top--card">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="bottom--card">
          <div className="info--card">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div> 
  )
}
