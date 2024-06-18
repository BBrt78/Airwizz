import './App.scss';
import React, {useState, useEffect, useRef} from 'react';
import {Navbar} from './Navbar';
import plane1 from './img/plane1.jpg';
import plane2 from './img/plane2.jpg';
import plane3 from './img/plane3.jpg';
import planeW from './img/planeW.png';
import carW from './img/carW.png';
import bedW from './img/bedW.png';
import planeB from './img/planeB.png';
import carB from './img/carB.png';
import bedB from './img/bedB.png';

export function Home() {
    const  [currentIndex, setCurrentIndex] = useState(0);
    const slides = [<img src={plane1} alt='plane1' className='plane1 plane'/>, 
                    <img src={plane2} alt='plane2' className='plane2 plane'/>, 
                    <img src={plane3} alt='plane3' className='plane3 plane'/>];
    const [slidesContent, setSlidesContent] = useState(null);
    const [activeMenu, setActiveMenu] = useState('menu1')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                if (prevIndex < slides.length -1) {
                    setCurrentIndex(prevIndex + 1)
                } else {
                    setCurrentIndex(0) 
                }
            });
            
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    
    const onSlidesMenu = (event, activeMenu) => {
        if (!event.target.classList.contains('whiteBG')) {
            document.getElementById('onSlidesMenu1Id').classList.remove('whiteBG');//usuwa biale tlo z niekliknietych tytulow menu
            document.getElementById('onSlidesMenu1Id').querySelector('img').classList.remove('whiteBG');
            document.getElementById('onSlidesMenu2Id').classList.remove('whiteBG');
            document.getElementById('onSlidesMenu2Id').querySelector('img').classList.remove('whiteBG');
            document.getElementById('onSlidesMenu3Id').classList.remove('whiteBG');
            document.getElementById('onSlidesMenu3Id').querySelector('img').classList.remove('whiteBG');
            event.currentTarget.classList.add('whiteBG');
            event.currentTarget.querySelector('img').classList.add('whiteBG');
            setActiveMenu(activeMenu);
        }
                
        const slidesContentF = () => {
            switch (event.currentTarget.id) {  //na podstawie id kliknietego tytulu menu wyswietla jego div ponizej
                case 'onSlidesMenu1Id':
                    return (
                    <div className='onSLidesInCont1'>1switch</div>
                    );
                case 'onSlidesMenu2Id':
                    return (
                    <div className='onSLidesInCont2'>2switch</div>
                    );
                case 'onSlidesMenu3Id':
                    return (
                    <div className='onSLidesInCont3'>3switch</div>
                    );
                default:
                    return (
                        <div className='onSLidesInCont1'>1switch</div>
                        );
            }
        }
        setSlidesContent(slidesContentF())
    }    

    return (
        <div className='container'>
            <Navbar />
            <div className='slides'>
            {slides[currentIndex]}
            </div>
            <div className='onSlides'>
                <div className='menu'>
                    <div className={`menu1 ${activeMenu === 'menu1' ? 'whiteBG' : ''}`} 
                         id='onSlidesMenu1Id' 
                         onClick={(event) => onSlidesMenu(event, 'menu1')}>
                            {   activeMenu === 'menu1' ?
                                <img src={planeB} alt='planeB' className='plane' />:
                                <img src={planeW} alt='planeW' className='plane' />
                            }
                        Loty
                    </div>
                    <div className={`menu2 ${activeMenu === 'menu2' ? 'whiteBG' : ''}`} 
                         id='onSlidesMenu2Id' 
                         onClick={(event) => onSlidesMenu(event, 'menu2')}>
                            {   activeMenu === 'menu2' ?
                                <img src={bedB} alt='planeB' className='bed' />:
                                <img src={bedW} alt='planeW' className='bed' />
                            }
                        Hotele
                    </div>
                    <div className={`menu3 ${activeMenu === 'menu3' ? 'whiteBG' : ''}`} 
                         id='onSlidesMenu3Id' 
                         onClick={(event) => onSlidesMenu(event, 'menu3')}>
                            {   activeMenu === 'menu3' ?
                                <img src={carB} alt='planeB' className='car' />:
                                <img src={carW} alt='planeW' className='car' />
                            }
                        Samochody
                    </div>
                </div>
                <div className='onSlidesIn'>
                    {slidesContent ?
                     slidesContent:
                     <div className='onSLidesInCont1'>
                        <div className='radioBtns'>
                            <input type='radio' id='radio1' checked/>
                            <label for='radio1'>Powrotny</label>
                            <input type='radio' id='radio2' />
                            <label for='radio2'>W jedną stronę</label>
                        </div>
                     </div>
                    }
                </div>
            </div>
        </div>
    )
}
