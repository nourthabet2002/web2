import React from 'react'
import { useState } from 'react'

const Addmodal =   ({setopenmodal,add,newhome,setnewhome}) => {
    
    
  return (
    <div className='add'>
        <label >lieu</label>
        <input type="text" onChange={(e)=>setnewhome({...newhome,lieu:e.target.value})}  />
       <label>descripition</label>
       <input type="text" onChange={(e)=>setnewhome({...newhome,descripition:e.target.value})} />
       <label>imgsrc</label>
       <input type="text" onChange={(e)=>setnewhome({...newhome,imgsrc:e.target.value})} /> 
       <label>phone</label>
       <input type="number" onChange={(e)=>setnewhome({...newhome,phone:e.target.value})} /> 
      <button onClick={()=>add(newhome)} >ADD</button>
      <button onclick={()=>setopenmodal(false)}>CLOSE</button>
    </div>
  )
}

export default Addmodal
