import React from 'react'

const CarouselItem = ({item}) => {
  return (
    <div className="carousel-item">
        <div></div>
        <img className="carousel-image" src={item.icon.deault}></img>
        <div className="carousel-item-text">{item.description}</div>
    </div>
  )
}

export default CarouselItem