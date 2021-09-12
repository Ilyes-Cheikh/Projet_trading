import React from 'react'
import '../assets/css/test.css'
import  logoexporl from  "../assets/images/logoExpoRL.png"
import layedphone from "../assets/images/layedphone.png"
export default function test() {
    return (
        <div className="orange">
            <div className="paraimg" >
                <img className="exporl" src={logoexporl}/>
            <img className="layedphone" src={layedphone}/>
            </div>
            
           <div className="left-container">
           <h2 className="title" >AI based crypto-investing</h2>
            <ul className="list">
            <div className="left-element">
             <li/>
             <h2 className="text">Sophisticated Machine Learning aggregation of statarb signals</h2>
             </div>
             <div className="left-element">
             <li/>
             <h2 className="text">State of the art NLP sentiment analysis</h2>
             </div>
         </ul>
           </div>
           <div className="darkblue">
              <div className="bottom-container">
                  <h2 className="bottom-title">AI tailored solutions</h2>
                  <h5 className="bottom-text">we provide you with a tailored AI driven/Big Data solution that will respond to your needs.</h5>
              </div>
              <div className="right-container">
              <h2 className="title" >Equity Derivatives fast pricing</h2>
            <ul className="list">
            <div className="right-element">
             <li/>
             <h2 className="text">Sophisticated Machine Learning aggregation of statarb signals</h2>
             </div>
             <div className="right-element">
             <li/>
             <h2 className="text">State of the art NLP sentiment analysis</h2>
             </div>
         </ul>
              </div>
           </div>
        </div>
    )
}
