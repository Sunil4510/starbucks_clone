import React from 'react'
import "./Bottom.css"
const Bottom = () => {
    const img = ['./spotify.png','./facebook.png','./pinterest.png','./instagram.png','./youtube.png','./twitter.png'];
    const data = ['Privacy Policy','Terms of Use','CA Supply Chain Act','Cookie Preferences']
  return (
    <div className="bottom">
        <div className="bottom_social">
            {img.map((item,id)=><img src={item} alt="img" key={id+1} className="bottom_img"/>)}
       </div>
       <div className="bottom_info">
            {data.map((item,id)=><p className="" key={id+1}>{item}</p>)}
       </div>
       <p className="bottom_p">© 2022 Starbucks Coffee Company. All rights reserved.</p>
    </div>
  )
}

export default Bottom