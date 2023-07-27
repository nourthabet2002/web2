import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  return (
    <div>
        <div className="box">
            <h1>welcome</h1>
            <div className="email">
                <label For="email">email</label>
                <input type="text" name="" id="" />
            </div>
            <div className="password">
                <label For="password">password</label>
                <input type="text" name="" id="" />
            </div>
            <button className='forget'>forget my password</button>
            
            <button  className='nav'onClick={()=>navigate("/autres")} >login</button>
      </div>
    </div>
  )
}

export default Login
