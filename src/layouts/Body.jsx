import React from 'react'
import Card from '../components/card'
import Notification from '../components/Notification'

const Body = () => {
  return (<>
  <div className="container">
    <div className="box flex justify-center">
      <Card/>
      <Notification/>
    </div>
  </div>
  </>
  )
}

export default Body