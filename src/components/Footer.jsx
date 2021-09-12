import react from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/footer.css'
import logoblanc from '../assets/images/logoblanc.png'

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-logo-container">
                <img src={logoblanc} />
            </div>
            <div className="footer-col">
                <h3>Explore</h3>
                <Link to='/' className='link'> <p>Home</p> </Link>
                <Link to='/about' className='link'><p>About Us</p></Link>
                <Link to='/technologies' className='link'> <p>Our Technologies</p> </Link>
                <Link to='/register' className='link'> <p>Register</p> </Link>
            </div>
            <div className="footer-col">
                <h3>Visit Us</h3>
                <p>46 Lower Richmond Road
                    Unit 18, London
                    SW14 7EX
                </p>
                <h3>Contact Us</h3>
                <p>contact@richmondanalytica.com</p>

            </div>
            <div className="footer-col">
                <h3>Follow</h3>
                <a href='https://www.instagram.com/richmondanalytica/' target='_blank' className='link'> <p>Instagram</p> </a>
                <a href='https://www.facebook.com/richmondanalytica' target='_blank' className='link'> <p>Facebook</p> </a>
                <a href='https://www.linkedin.com/company/richmond-analytica/' target='_blank' className='link'>  <p >LinkedIn </p></a>

            </div>
            <div className="footer-col">

            </div>
            <div className="footer-col">

            </div>
        </div>
    )
}