import React, { useState } from 'react'
import './Footer.css'
const Footer = ({list,heading}) => {
  const[head,sethead]=useState(false);
  // const handlehead = ()=>{
  //   console.log(head);
  //   sethead(!head);
  // }
  return (
    <div className="footer">
        <h1 onClick={()=>sethead(!head)}>{heading}</h1>
        <ul className={head?"ul_open":"ul_hide"}>
            {list.map((item,id)=><li key={id+1}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Footer