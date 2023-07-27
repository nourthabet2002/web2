import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card' >
        <img src={el.imgsrc} alt="" />
      <h1>{el.lieu}</h1>
      <p>{el.description}</p>
      <h3>{el.phone}</h3>
    </div>
  )
}

export default Card
