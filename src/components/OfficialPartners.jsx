import React from 'react'
import '../assets/css/OfficialPartners.css'
import binance from '../assets/images/binance.png'

export default function OfficialPartners() {
    return(
        <div className="officialpartners-container">
            <hr className="partners-line"/>
            <h1 className="partner-title">OFFICIAL PARTNERS</h1>
            <hr className="partner-title-line" />
            <img src={binance} alt="binance-logo" className="binance-logo" />
         </div>
    )
}