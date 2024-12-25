import React from 'react'
import Card from '../components/card'
import Notification from '../components/Notification'
import Box from '../components/Box'
import Login from '../pages/Login'

const Body = () => {
  return (<>
  <div className="container">
    <div className="box flex justify-center">
      {/* <Card />
      <Notification />
      <Box /> */}
      <Login />
    </div>
  </div>
  </>
  )
}

export default Body