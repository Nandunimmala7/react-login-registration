import React from 'react'
import { useLocation } from 'react-router-dom';


const HomeExe = (selectedOrder) => {
  const location = useLocation();
  const uri = location.state.item
  return (
    <div>
       {uri.item.url}
       hello world
       {/* {console.log(uri.item.url)} */}
    </div>
  )
}

export default HomeExe