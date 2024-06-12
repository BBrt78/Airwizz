import './App.scss';
import React from "react";
import {Link} from 'react-router-dom';
import logoWhite from './img/logoWhite.png';
import downArrowW from './img/downArrowW.png';
import it from './img/it.png';
import fra from './img/fra.png';
import es from './img/es.png';
import uk from './img/uk.png';
import deu from './img/deu.png';
import cz from './img/cz.png';
import cat from './img/cat.png';
import pl from './img/pl.png';


export function Samochody() {


    return (
        <div>
            <div className='navbarCars'>
                <img src={logoWhite} alt='logo' className='logo' />
            </div>
            
        </div>
    )
}