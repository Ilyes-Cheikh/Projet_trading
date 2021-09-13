import react from 'react'
import '../assets/css/OurCofounders.css'
import wassim from '../assets/images/wassim.png'
import john from '../assets/images/john.png'

export default function OurCofounders(){
    return(
        <div className="Ourcofounders-container">
         
            <div className="cofounders-presentation">
                <p className="confounders-text">
                Richmond Analytica was founded by Wassim Chaouachi and John Sibony, two former promotion mates at Paris Dauphine and ENS. They had the idea of ​​cofoundin Richmond Analytica to bring hedge fund and investment bank expertise in crypto markets so as to make these markets efficient and profitable for retail after the big banks and investment firms have come into force in this market. As a result, Richmond Analytica exists in order to create a certain balance in the crypto markets by offering investment companies.
                </p>
            </div>
            <div className="cofounders-images">
                <div className="wassim">
                <div className="blue-square"></div>
                <img className="wassim-image" src={wassim} alt='wassim'/>
                </div>
                <div className="john">
                <div className="blue-square"></div>
                </div>
            </div>
        </div>
    )
}