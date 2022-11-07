import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const[menu,setmenu]=useState(false);
    const toggleMenu =()=>{
        setmenu(!menu);
    }

  return (
    <>
        <nav className="nav">
            <img src="./logo.webp" alt="icon" className="navIcon"/>
                <div className={`navbar ${menu?"open":"hide"}`}>
                    <div className="list">
                        <ul className="list_ul">
                            <li><span>MENU</span> <span className="menu_arrow">{">"}</span></li>
                            <li>REWARDS</li>
                            <li>GIFT CARDS</li>
                        </ul>
                    </div>
                    <hr className="line"/>
                    <div className="store">
                         <div className="store_location">
                            <img src="./loc.svg" alt="location"
                            className="blackS"/>
                            <img src="./green.png" alt="location" className="greenS"/>
                            <p>Find a Store</p>
                        </div>
                    <div className="store_btn">
                        <button className="store_sign">Sign in</button>
                        <button className="store_join">Join now</button>
                    </div>
                </div>
            </div>
            <button onClick={toggleMenu} className="menu">
            {menu?(<img src="./w.png" alt="w" className="menu_w"/>) :(<img src="./menu.svg" alt="menu" className="menu_h"/>)}
            </button>
        </nav>
    </>
  )
}

export default Navbar