import React, { useState } from 'react'
import Counter from '../utilities/Counter'
const Card = () => {
    const [card, setCard] = useState({
        title :"CARD Title",
        description: "This is a card description",
        filePath:"./src/assets/card.jpg"
    })
  return (
    <>
    <div className="card card-bg flex mx-auto justify-center">
        <div className="card-container">
            <div className="card-title text-center">
                <h2>{card.title}</h2>
            </div>
            <div className="card-body">
                <div className="card-image-div">
                    <img className='card-image' src={card.filePath} alt="thumbnail" />
                </div>
                <div className="card-desc text-center">
                    <p className='util-desc-font'>{card.description}</p>
                </div>
                <div className="item-count">
                    <Counter/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card