import React from 'react'
import Card from './Card'
const Movielist = ({home,search}) => {
  return (
    <div className='cards'>
      {home.filter(el=>el.lieu.toUpperCase().includes(search.toUpperCase())).map(el=><Card el={el}  />)}
    </div>
  )
}
export default Cards