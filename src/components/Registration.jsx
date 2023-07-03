
import React ,{useState} from 'react'

const Registration = (props) => {
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [formData,setFormData] = useState({})
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      const newData = {
        name,
        number,
        email,
        pass,
      };
      
     setFormData({...formData, ...newData});
     console.log(formData);
  }
  return (
    <div className='register'>
    <h1 className='r'> Registration </h1>
    <form className='regist' onSubmit={handleSubmit}>
        <label htmlFor='name' > <h4>Name</h4></label>
        <input className='d' value={name} placeholder='name' type='text' id='name' onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor='number'> <h4>Number</h4> </label>
        <input className='d' value={number} placeholder='number' type='text' id='number' onChange={(e) => setNumber(e.target.value)}></input>
        <label htmlFor='email' > <h4> Email </h4></label>
        <input className='d' value={email} placeholder='email' type='email' id='email' onChange={(e) => setEmail(e.target.value)}></input>
        <label htmlFor='pass'><h4> Password </h4></label>
        <input className='d' value={pass} placeholder='password' type='password' id='password' onChange={(e) => setPass(e.target.value)}></input>
        <div>
        <button > Register </button>
        </div>
    </form>
    <h6 onClick={()=> props.onFormSwitch('login')}>Already have an account ? : login here</h6>
    </div>
  )
}

export default Registration