import axios from 'axios'
import React from 'react'

function Logout() {
    const logout=async ()=>{
        const {data}=await axios.post('/api/v1/users/logout')
        console.log(data)
    }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout
