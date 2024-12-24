import React, { useState } from 'react'

const Notification = () => {
    const handleSubBtn=()=>{
        alert("You have successfully subscribed to our newsletter!");
    }
  return (
    <>
        <div className="notify-container bg-red-200 flex-col w-[250px] h-[150px] content-center rounded-md px-5">
            <div className="notify-header w-full m-1">
                <h2>Subscribe to get notify!</h2>
            </div>
            <div className="notify-body m-1">
                <div className="notify-content">
                    <div className="notify-form">
                        <form className='form-content flex-col'>
                            <div className="input-field">
                                <input type="email" id="notify-name" className='px-1 rounded-sm' placeholder="email"/>
                            </div>
                            <div className="sub-btn mt-3">
                                <button type="submit" onClick={handleSubBtn}
                                 className="btn bg-red-400 text-white p-2 rounded-md hover:bg-red-500 text-[13px]">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Notification