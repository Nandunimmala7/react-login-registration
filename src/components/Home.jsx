import React from 'react'

const Home = ({fetchData}) => {
  return (
    <div className='search-bar'>
   <label className='label' htmlFor='search'>Search : </label>
   <input type='search' id='search' className='search' placeholder='search...........' />
   <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
   </div>
  )
}

export default Home