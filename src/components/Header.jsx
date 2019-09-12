import React from 'react'
import header from '../assets/header2.jpg'
import Navbar from './Navbar'

export default function Header() {
  var headerStyle = {
    width: "100%",
  }
  return (
    <div>
    <img src={header} alt='Graph Image' style={headerStyle} />
    <Navbar/>
    </div>
  )
}
