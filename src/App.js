import React from 'react'
import Card from './Components/Card'
import Mcard from './Components/Mcard'
import Navbar from './Components/Navbar'
import { products } from './Components/products'
import {Lists} from './Components/Lists'
import "./App.css"
import Footer from './Components/Footer'
import Bottom from './Components/Bottom'
const App = () => {
const headings = ['About Us','Careers','Social Impact','For Business Partners','Order and Pickup']
  return (
    <div className="App">
      <Navbar/>    
      <Card/>   
      {products.map((item)=>{
        return(
        <Mcard pic={item.img} title={item.title} info={item.info} btn={item.btn} direction={item.direction} key={item.id}/>
        )
      })}
      
      <p className="App_info">*Excludes taxes and gratuities. At participating stores. Some restrictions apply. 150 Stars deposited after first qualifying Starbucks purchase. Flights purchased close to departure may not earn double Stars. Stars may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit deltastarbucks.com/terms</p>
      <br/>
      <div className="App_footer">
        <div className="App_footer_list">
          {Lists.map((item,id)=>{
            return(
              <Footer list={item} heading={headings[id]}  key={id+1}/>
            )
          })}
        </div>
        <hr className="App_line"/>
        <Bottom key={1}/>
      </div>
    </div>
  )
}

export default App