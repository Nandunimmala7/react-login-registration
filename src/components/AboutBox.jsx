import React from 'react'
import "../styles/ab.css"

const AboutBox = ({orderdetails}) => {
    
  return (
    <>
    <div className='ab'>
        hello
        <div>
        <img className='img' src={orderdetails.imageURL} alt="Order" /> 
        </div>
        <div>
        <input type="text" name="username" placeholder="Enter your username" />

        </div>
  </div>
    </>
   
  )
}

export default AboutBox