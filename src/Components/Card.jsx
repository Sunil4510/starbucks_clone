import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className="card">
        <img src="./delta.webp" alt="title" className="card_img"/>
        <div className="card_info">
            <p className="card_title">A new way to earn sips and trips</p>
            <p className="card_heading">Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:</p>
            <ul className="card_list">
                <li><p>150 Stars + 500 miles when you link before 12/31</p></li>
                <li><p>Double Stars on Delta travel days</p></li>
                <li><p>1 mile per $1 spent at Starbucks (excludes taxes and gratuities)*</p></li>
            </ul>
            <button className="card_button">Link accounts</button>
        </div>
    </div>
  )
}

export default Card