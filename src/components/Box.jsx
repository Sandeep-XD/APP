import React, { useState } from 'react'

const Box = () => {
    const [text , setText] =useState('')
  return (
    <>
        <div className="box">
            <div className="box__inner">
                <div className="box__title">Title</div>
                <div className="box__content">
                    <div className="user-input">
                        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter your name"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Box