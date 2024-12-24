import React, { useState } from 'react'

const Counter = () => {
    const[value , setValue]=useState(0);
    const handleIncrement = () => {
        setValue(value + 1);
        }
    const handleDecrement =() =>{
        if (value > 0){
            setValue(value - 1);
        }
        else{
            setValue(0)
        }
    }
  return (
    <>
        <div className="counter-box flex justify-around h-[50px] items-center">
            <div className="increase-btn">    
                <button className='ui-btn hover:bg-pink-100' onClick={handleIncrement}>
                    +
                </button>
            </div>
            <div className="item-input flex justify-center">
                <input type="text" value={value} className="item-input-box rounded-md py-2"/>
            </div>
            <div className="decrease-btn">
                <button className='ui-btn hover:bg-pink-100'  onClick={handleDecrement}>
                    -
                </button>
            </div>
        </div>
    </>
  )
}

export default Counter