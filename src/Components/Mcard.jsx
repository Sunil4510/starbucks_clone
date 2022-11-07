import React from 'react'
import './Mcard.css'
const Mcard = ({pic,title,info,btn,direction}) => {
  return (
    <div className={`Mcard ${direction}`}>
        <img src={pic} alt="mcardimg" className="Mcard_img"/>
        <div className="Mcard_info">
            <h1>{title}</h1>
            <p>{info}</p>
            <button className="Mcard_btn">{btn}</button>
        </div>
    </div>
  )
}

export default Mcard