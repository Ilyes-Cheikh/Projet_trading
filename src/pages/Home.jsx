import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeAboutUs from '../components/HomeAboutUs'
import OurTechnologies from '../components/OurTechnologies'
import Test from '../components/test'
import Footer from '../components/Footer'
import News from '../components/news'

export default function Home() {
    return (
        <>
            <HomeHeader/>
            <HomeAboutUs/>
            <Test/>
            <OurTechnologies/>
            <News/>
            <Footer/>
        </>
    )
}
