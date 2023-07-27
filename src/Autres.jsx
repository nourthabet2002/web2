import React, { useState } from 'react'
import Navbar from './Navbar'
import Section1 from './Section1'
import Navbar2 from './Navbar2'
import Section2 from './Section2'
import Section3 from './Section3'
import Login from './Login'
import Card from './Card'
import Addmodal from './Addmodal'
const Autres =() => {
  const [search, setsearch] = useState("")
  const [home, sethome] = useState([
    {
      lieu: "Gabes",
    descripition: "blabalblablalbalblalblalbal",
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlWpgkeSvQ1k-2PgxK1-03bzC2tgDR1QDag&usqp=CAU",
    phone: "234242523"
    },
    {
      lieu: "sousse",
    descripition: "s+2",
    imgsrc: "data:image/jpeg;base64,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",
    phone: "234242523"
    },
    {
      lieu: "tunis",
    descripition: "s+3",
    imgsrc: "data:image/jpeg;base64,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",
    phone: "234242523"
    },
    {
      lieu: "sfax",
    descripition: "s+3",
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_yyBvHu2G-M_w5kkZ-E5mOQAqh4h-ee0hV8jmH3fnaqCGER2fHo1GQRnvR__Z3H3PJk&usqp=CAU",
    phone: "234242523"
    },
  ])
  const [newhome, setnewhome] = useState({
    lieu: "",
    descripition: "",
    imgsrc: "",
    phone: ""
  })
  const add=()=>{sethome([...home,newhome])}
  const [openmodal, setopenmodal] = useState(false)
  return (
    <div>
      {openmodal?<Addmodal add={add} newhome={newhome} setnewhome={setnewhome}  />:null}
      <Navbar setsearch={setsearch} setopenmodal={setopenmodal} openmodal={openmodal} />
      <Section1 />
      <Navbar2 />
      <Section2 />
      <Section3 />
      <div className="card_list">
      {home.filter(el=>el.lieu.toLowerCase().includes(search.toLowerCase())).map(el=><Card  el={el} />)}
      </div>
    </div>
  )
  
}

export default Autres
