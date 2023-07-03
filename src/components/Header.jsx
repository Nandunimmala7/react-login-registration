import React from 'react'
import Login from './Login'
import {useState} from "react"
import Registration from './Registration'

const Header = () => {
    const [current,setCurrent] = useState('login');
    const setToggleForm = (form) =>{
        setCurrent(form)
    }
    const [Submitted,setSubmitted] = useState(false)
  return (
   
        <>
        {current === 'login' ? <Login onFormSwitch={setToggleForm}/> : <Registration onFormSwitch={setToggleForm}/>}
        </>
    
  )
}

export default Header