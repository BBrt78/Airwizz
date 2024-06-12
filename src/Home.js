import './App.scss';
import React, {useState, useEffect} from 'react';
import {Navbar} from './Navbar';
import plane1 from './img/plane1.jpg';
import plane2 from './img/plane2.jpg';
import plane3 from './img/plane3.jpg';

export function Home() {
    const  [currentIndex, setCurrentIndex] = useState(0);
    const slides = [<img src={plane1} alt='plane1' className='plane1 plane'/>, 
                    <img src={plane2} alt='plane2' className='plane2 plane'/>, 
                    <img src={plane3} alt='plane3' className='plane3 plane'/>];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                if (prevIndex < slides.length -1) {
                    setCurrentIndex(prevIndex + 1)
                } else {
                    setCurrentIndex(0)
                }
            });
            
        }, 5000);

        return () => clearInterval(interval);
    }, [])
    
    return (
        <div className='container'>
            <Navbar />
            <div className='slides'>
            {slides[currentIndex]}
            </div>
        </div>
    )
}