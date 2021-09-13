import react from 'react'
import HomeAboutUs from '../components/HomeAboutUs'
import Navbar from '../components/Navbar'
import '../assets/css/About.css'
import OurCofounders from '../components/OurCofounders'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function About() {
    return(
        <div className='aboutpage'>
        <Navbar/>
        <HomeAboutUs/>
        <OurCofounders/>
        <Footer/>
        </div>
        )
}