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
    const [activeMenu, setActiveMenu] = useState('menu1');
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const cities = ["Amsterdam", "Andora la Vella", "Ateny", "Belgrad", "Berlin", "Bruksela", "Budapeszt",
                    "Bukareszt", "Chisinau", "Dublin", "Erywań", "Helsinki", "Lisbona", "Ljubljana",
                    "Londyn", "Luksemburg", "Madryt", "Monako", "Nikozja", "Oslo", "Paryż", "Podgorica",
                    "Pristina", "Praga", "Reykjavik", "Ryga", "San Marino", "Sarajewo", "Skopje",
                    "Sofia", "Sztokholm", "Tallinn", "Tbilisi", "Tirana", "Valletta", "Vaduz", "Warszawa",
                    "Wilno", "Wiedeń", "Zagrzeb"];
    const [cityInput, setCityInput] = useState('');
    const citiesRef = useRef(null);
    const citiesListRef = useRef(null);

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
                        <div className='onSLidesInCont1'>
                        <div className='radioBtns'>
                            <input type='radio' id='radio1' checked={checked1} onClick={checked}/>
                            <label htmlFor='radio1'>Powrotny</label>
                            <input type='radio' id='radio2' checked={checked2} onClick={checked}/>
                            <label htmlFor='radio2'>W jedną stronę</label>
                        </div>

                        <div className='inputs'>
                            <input 
                                className='input1'
                                type='text' 
                                placeholder='Miejsce wylotu' 
                                onChange={handleChange} 
                                value={cityInput}
                                onClick={showList}
                                ref={citiesRef}
                                />
                            <div className='cities' id='citiesId' ref={citiesListRef}>
                                {cities.map((element, index) => <><div className='city' key={index}>{element}</div></>)}
                            </div>
                        </div>
                     </div>
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
    };

    const checked = (event) => {
        switch (event.target.id) {
            case 'radio1':
                    setChecked1(true);
                    setChecked2(false);
            break;
            case 'radio2':
                    setChecked2(true);
                    setChecked1(false);
            break;
            default:
                return null;
        }
    }
    
    const showList = () => {
            document.getElementById('citiesId').classList.remove('citiesAnimation2');
            document.getElementById('citiesId').classList.add('citiesAnimation1');      
    }

    const handleChange = (event) => {
        setCityInput(event.target.value)
    }

    useEffect(() => {
        const closeCities = (event) => {
            if (citiesRef.current && 
                citiesListRef.current && 
                !citiesRef.current.contains(event.target) && 
                !citiesListRef.current.contains(event.target) &&
                document.getElementById('citiesId').classList.contains('citiesAnimation1')) 
                {
                document.getElementById('citiesId').classList.remove('citiesAnimation1');
                document.getElementById('citiesId').classList.add('citiesAnimation2');
                setTimeout(() => {document.getElementById('citiesId').style.setProperty('display', 'none')}, 200);
            }
        }
        document.addEventListener('click', closeCities);
        return () => {
            document.removeEventListener('click', closeCities)
        }
    }, [])

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
                            <input type='radio' id='radio1' checked={checked1} onClick={checked}/>
                            <label htmlFor='radio1'>Powrotny</label>
                            <input type='radio' id='radio2' checked={checked2} onClick={checked}/>
                            <label htmlFor='radio2'>W jedną stronę</label>
                        </div>

                        <div className='inputs'>
                            <input 
                                className='input1'
                                type='text' 
                                placeholder='Miejsce wylotu' 
                                onChange={handleChange} 
                                value={cityInput}
                                onClick={showList}
                                ref={citiesRef}
                                />
                            <div className='cities' id='citiesId' ref={citiesListRef}>
                                {cities.map((element, index) => <><div className='city' key={index}>{element}</div></>)}
                            </div>
                        </div>
                     </div>
                    }
                </div>
            </div>
        </div>
    )
}

//lista reagujaca na wpisywane litery

// const cities = [
//     "Amsterdam",
//     "Athens"];
  
//   const CitySearch = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredCities, setFilteredCities] = useState(cities);
  
//     const handleInputChange = (event) => {
//       const value = event.target.value.toLowerCase();
//       setSearchTerm(value);
  
//       if (value === '') {
//         setFilteredCities(cities);
//       } else {
//         const startsWith = cities.filter(city => city.toLowerCase().startsWith(value));
//         const contains = cities.filter(city => !city.toLowerCase().startsWith(value) && city.toLowerCase().includes(value));
//         setFilteredCities([...startsWith, ...contains]);
//       }
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleInputChange}
//           placeholder="Enter city name"
//         />
//         <ul>
//           {filteredCities.map((city, index) => (
//             <li key={index}>{city}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };