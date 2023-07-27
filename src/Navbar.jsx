import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Addmodal from './Addmodal'


const Navbar = ({openmodal,setopenmodal,home,setsearch}) => {
  const navigate=useNavigate()
  
  return (
    <div className='navbar'>
      
      <ol>
        <li>Menu</li>
        <li>Retour aux Résultats</li>
        <li>Estimations Immobiliére</li>
        <button onClick={()=>setopenmodal(true)} >ADD</button>
        <button onClick={()=>navigate("/")} >LOGIN</button>
      </ol>
      {/* {(openmodal)?<Addmodal setopenmodal={setopenmodal} />:null} */}
      <label>search</label>
      <input type="text" onChange={(e)=>setsearch(e.target.value)} />
    </div>
  )
}

export default Navbar

