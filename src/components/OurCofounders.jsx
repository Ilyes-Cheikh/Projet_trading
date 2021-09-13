import react from 'react'
import '../assets/css/OurCofounders.css'
import wassim from '../assets/images/wassim.png'
import john from '../assets/images/john.png'
import Linkedin from '../assets/images/Linkedin.png'

export default function OurCofounders(){
    return(
        <div className="Ourcofounders-container">
            <div className="ourcofounders">
                <h1 className="ourcofounders-title"> OUR CO-FOUNDERS </h1>
                <hr className="ourcofounders-line"/>
            </div>
            <div className="cofounders-presentation">
                <p className="confounders-text">
                Richmond Analytica was founded by Wassim Chaouachi and John Sibony, two former promotion mates at Paris Dauphine and ENS. They had the idea of ​​cofoundin Richmond Analytica to bring hedge fund and investment bank expertise in crypto markets so as to make these markets efficient and profitable for retail after the big banks and investment firms have come into force in this market. As a result, Richmond Analytica exists in order to create a certain balance in the crypto markets by offering investment companies.
                </p>
            </div>
            <div className="cofounders-images">
                <div className="wassim">
                <div className="blue-square"></div>
                <img className="cofounder-image" src={wassim} alt='wassim'/>
                <div className='Cofounder' >
                <h1 className="name-cofounder">Wassim Chaouachi</h1>
                <img src={Linkedin} alt='linkedin' className="linkedin-logo"/>
                </div>
                </div>
                <div className="john">
                <div className="blue-square"></div>
                
                <img className="cofounder-image" src={john} alt='john' />
                <div className='Cofounder' >
                <h1 className="name-cofounder">John Sibony</h1>
                <img src={Linkedin} alt='linkedin'  className="linkedin-logo"/>
                </div>
                </div>
            </div>
        </div>
    )
}