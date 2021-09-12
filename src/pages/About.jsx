import react from 'react'
import Ourservices from '../components/Ourservices'
import HomeHeader from '../components/HomeHeader'
import Navbar from '../components/Navbar'
import '../assets/css/About.css'
import DetailedAboutUs from '../components/DetailedAboutUs'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function About() {
    return(
        <div className='aboutpage'>
        <Navbar/>
        <Header title={"ABOUT US"}/>
        <DetailedAboutUs/>
        <Ourservices/>
        <Footer/>
        </div>
        )
}