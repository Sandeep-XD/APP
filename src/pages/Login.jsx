import React, { useRef } from 'react'

const Login = () => {
    const username= useRef()
  return (
    <>
        <div className="container">
            <div className="flex justify-center bg-slate-500 h-[500px] items-center">
                <div className="login-box w-[35%]">
                    <label htmlFor="username">User Name</label>
                    <input type="text" id='username' placeholder='username'/>
                    <label htmlFor="user-pass">Password:</label>
                    <input type="password" id='user-pass'/>
                    <button className="login-btn" type="submit">Login</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login    