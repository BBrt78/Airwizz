import './App.scss';
import React, {useRef, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {Samochody} from './Samochody';
import logoWhite from './img/logoWhite.png';
import downArrowW from './img/downArrowW.png';
import upArrowW from './img/upArrowW.png';
import downArrowB from './img/downArrowB.png';
import upArrowB from './img/upArrowB.png';
import gbflag from './img/gbflag.png';
import xRed from './img/xRed.png';
import parkingPlan from './img/parkingPlan.png';
import tripPlan from './img/tripPlan.png';
import airplanePlan from './img/airplanePlan.png';
import busPlan from './img/busPlan.png';
import destinationPlan from './img/destinationPlan.png';
import finderPlan from './img/finderPlan.png';
import flightsPlan from './img/flightsPlan.png';
import hotelsPlan from './img/hotelsPlan.png';
import carPlan from './img/carPlan.png';
import eye from './img/eye.png';
import eyePink from './img/eyePink.png';
import downArrowGrey from './img/downArrowGrey.png';

export function Navbar() {
    const navbarRef = useRef(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [eyeOpen, setEyeOpen] = useState(false);
    const [arrowDown1, setArrowDown1] = useState(true);
    const [arrowDown2, setArrowDown2] = useState(true);
    const [arrowDown3, setArrowDown3] = useState(true);
    const [briefShowed, setBriefShowed] = useState(false);

const navPopClick = () => {
    setArrowDown1(!arrowDown1);
    if (!document.getElementById('navPopActiveId').classList.contains('bGroundAnimation1')) {//pokaz menu
        document.getElementById('navPopActiveId').classList.remove('bGroundAnimation2');
        document.getElementById('navPopActiveId').classList.add('bGroundAnimation1');
        document.getElementById('navPopTextId').classList.add('blue');
        document.getElementById('popMenuId').classList.remove('menuAnimation2');
        document.getElementById('popMenuId').classList.add('menuAnimation1');
        document.getElementById('planMenuId').classList.remove('menuAnimation1');
        document.getElementById('infoMenuId').classList.remove('menuAnimation1');

    } else if (!document.getElementById('navPopActiveId').classList.contains('bGroundAnimation2')) {//schowaj menu
        document.getElementById('navPopActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navPopActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navPopTextId').classList.remove('blue');
        document.getElementById('popMenuId').classList.remove('menuAnimation1');
        document.getElementById('popMenuId').classList.add('menuAnimation2');
    }

    if (document.getElementById('navPlanActiveId').classList.contains('bGroundAnimation1')) {
        document.getElementById('navPlanActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navPlanActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navPlanTextId').classList.remove('blue');
        setArrowDown2(!arrowDown2);

    }

    if (document.getElementById('navInfoActiveId').classList.contains('bGroundAnimation1')) {
        document.getElementById('navInfoActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navInfoActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navInfoTextId').classList.remove('blue');
        setArrowDown3(!arrowDown3);
    }
}

const navPlanClick = () => {
    setArrowDown2(!arrowDown2);
    if (!document.getElementById('navPlanActiveId').classList.contains('bGroundAnimation1')) {
        document.getElementById('navPlanActiveId').classList.remove('bGroundAnimation2');
        document.getElementById('navPlanActiveId').classList.add('bGroundAnimation1');
        document.getElementById('navPlanTextId').classList.add('blue');
        document.getElementById('planMenuId').classList.remove('menuAnimation2');
        document.getElementById('planMenuId').classList.add('menuAnimation1');
        document.getElementById('popMenuId').classList.remove('menuAnimation1');
        document.getElementById('infoMenuId').classList.remove('menuAnimation1');
        
    } else if (!document.getElementById('navPlanActiveId').classList.contains('bGroundAnimation2')) {
        document.getElementById('navPlanActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navPlanActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navPlanTextId').classList.remove('blue');
        document.getElementById('planMenuId').classList.remove('menuAnimation1');
        document.getElementById('planMenuId').classList.add('menuAnimation2');
    }

    if (document.getElementById('navPopActiveId').classList.contains('bGroundAnimation1')) {
        document.getElementById('navPopActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navPopActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navPopTextId').classList.remove('blue');
        setArrowDown1(!arrowDown1);
    }

    if (document.getElementById('navInfoActiveId').classList.contains('bGroundAnimation1')) {
        document.getElementById('navInfoActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navInfoActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navInfoTextId').classList.remove('blue');
        setArrowDown3(!arrowDown3);
    }
}

const navInfoClick = () => {
    setArrowDown3(!arrowDown3);
    if (!document.getElementById('navInfoActiveId').classList.contains('bGroundAnimation1')) {
        document.getElementById('navInfoActiveId').classList.remove('bGroundAnimation2');
        document.getElementById('navInfoActiveId').classList.add('bGroundAnimation1');
        document.getElementById('navInfoTextId').classList.add('blue');
        document.getElementById('infoMenuId').classList.remove('menuAnimation2');
        document.getElementById('infoMenuId').classList.add('menuAnimation1');
        document.getElementById('popMenuId').classList.remove('menuAnimation1');
        document.getElementById('planMenuId').classList.remove('menuAnimation1');

    } else if (!document.getElementById('navInfoActiveId').classList.contains('bGroundAnimation2')) {
        document.getElementById('navInfoActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navInfoActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navInfoTextId').classList.remove('blue');
        document.getElementById('infoMenuId').classList.remove('menuAnimation1');
        document.getElementById('infoMenuId').classList.add('menuAnimation2');
    }

    if (document.getElementById('navPopActiveId').classList.contains('bGroundAnimation1')) {
        document.getElementById('navPopActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navPopActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navPopTextId').classList.remove('blue');
        setArrowDown1(!arrowDown1);
    }

    if (document.getElementById('navPlanActiveId').classList.contains('bGroundAnimation1')) {
        document.getElementById('navPlanActiveId').classList.remove('bGroundAnimation1');
        document.getElementById('navPlanActiveId').classList.add('bGroundAnimation2');
        document.getElementById('navPlanTextId').classList.remove('blue');
        setArrowDown2(!arrowDown2);
    }
}

useEffect(() => {//zamykanie menu clickiem na container
    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            document.getElementById('navPopActiveId').classList.remove('bGroundAnimation1');
            document.getElementById('navPopActiveId').classList.add('bGroundAnimation2');
            document.getElementById('navPopTextId').classList.remove('blue');
            document.getElementById('arrowId1').classList.remove('blue');
            document.getElementById('popMenuId').classList.remove('menuAnimation1');
            document.getElementById('popMenuId').classList.add('menuAnimation2');
            document.getElementById('navPlanActiveId').classList.remove('bGroundAnimation1');
            document.getElementById('navPlanActiveId').classList.add('bGroundAnimation2');
            document.getElementById('navPlanTextId').classList.remove('blue');
            document.getElementById('arrowId2').classList.remove('blue');
            document.getElementById('planMenuId').classList.remove('menuAnimation1');
            document.getElementById('planMenuId').classList.add('menuAnimation2');
            document.getElementById('navInfoActiveId').classList.remove('bGroundAnimation1');
            document.getElementById('navInfoActiveId').classList.add('bGroundAnimation2');
            document.getElementById('navInfoTextId').classList.remove('blue');
            document.getElementById('arrowId3').classList.remove('blue');
            document.getElementById('infoMenuId').classList.remove('menuAnimation1');
            document.getElementById('infoMenuId').classList.add('menuAnimation2');            
        }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    };
}, [])

const showPopup = () => {//wyskakujace okienko - odprawa
    if (!document.getElementById('briefPopupId').classList.contains('popupAnimation1')) {
        document.getElementById('navPopTextId').classList.add('backgroundFont');
        document.getElementById('navHotelTextId').classList.add('backgroundFont');
        document.getElementById('navCarTextId').classList.add('backgroundFont');
        document.getElementById('navPlanTextId').classList.add('backgroundFont');
        document.getElementById('navInfoTextId').classList.add('backgroundFont');
        document.getElementById('navBriefTextId').classList.add('backgroundFont');
        document.getElementById('navLogTextId').classList.add('backgroundFont');
        document.getElementById('briefPopupId').classList.remove('popupAnimation2');
        document.getElementById('briefPopupId').classList.add('popupAnimation1');
        document.getElementById('backgroundBriefId').classList.add('backgroundBrief');
        setBriefShowed(true);
                
    } else if (!document.getElementById('briefPopupId').classList.contains('popupAnimation2')) {
        document.getElementById('navPopTextId').classList.remove('backgroundFont');
        document.getElementById('navHotelTextId').classList.remove('backgroundFont');
        document.getElementById('navCarTextId').classList.remove('backgroundFont');
        document.getElementById('navPlanTextId').classList.remove('backgroundFont');
        document.getElementById('navInfoTextId').classList.remove('backgroundFont');
        document.getElementById('navBriefTextId').classList.remove('backgroundFont');
        document.getElementById('navLogTextId').classList.remove('backgroundFont');
        document.getElementById('briefPopupId').classList.remove('popupAnimation1');
        document.getElementById('briefPopupId').classList.add('popupAnimation2');
        document.getElementById('backgroundBriefId').classList.remove('backgroundBrief');
        setBriefShowed(false);                    
    }
}

const showLogin = () => {//okienko login
    if (!document.getElementById('loginPopupId').classList.contains('popupAnimation1')) {
        document.getElementById('navPopTextId').classList.add('backgroundFont');
        document.getElementById('navHotelTextId').classList.add('backgroundFont');
        document.getElementById('navCarTextId').classList.add('backgroundFont');
        document.getElementById('navPlanTextId').classList.add('backgroundFont');
        document.getElementById('navInfoTextId').classList.add('backgroundFont');
        document.getElementById('navBriefTextId').classList.add('backgroundFont');
        document.getElementById('navLogTextId').classList.add('backgroundFont');
        document.getElementById('loginPopupId').classList.remove('popupAnimation2');
        document.getElementById('loginPopupId').classList.add('popupAnimation1');
        document.getElementById('backgroundBriefId').classList.add('backgroundBrief');
        setBriefShowed(true);

    } else if (!document.getElementById('loginPopupId').classList.contains('popupAnimation2')) {
        document.getElementById('navPopTextId').classList.remove('backgroundFont');
        document.getElementById('navHotelTextId').classList.remove('backgroundFont');
        document.getElementById('navCarTextId').classList.remove('backgroundFont');
        document.getElementById('navPlanTextId').classList.remove('backgroundFont');
        document.getElementById('navInfoTextId').classList.remove('backgroundFont');
        document.getElementById('navBriefTextId').classList.remove('backgroundFont');
        document.getElementById('navLogTextId').classList.remove('backgroundFont');
        document.getElementById('loginPopupId').classList.remove('popupAnimation1');
        document.getElementById('loginPopupId').classList.add('popupAnimation2');
        document.getElementById('backgroundBriefId').classList.remove('backgroundBrief');
        setBriefShowed(false); 
    }
}
                
    return (
        <div className={menuVisible ? 'nav-long' : 'nav-short'} ref={navbarRef}>
            <Link to='/'>
                <img src={logoWhite} alt='logo' className='logo' />
            </Link>
            <div className='navPop navElement' onClick={navPopClick}>
                <div className='navPopText navElemText' id='navPopTextId'>NAJBARDZIEJ POPULARNE LOTY</div>
                {arrowDown1 ?
                (briefShowed ?
                <img src={downArrowGrey} alt='downArrow' className='dArrow' id='arrowIdg'/>
                :
                <img src={downArrowW} alt='downArrow' className='dArrow' id='arrowId1'/>
                )
                :
                <img src={upArrowB} alt='upArrow' className='upArrow' id='arrowId1b'/>
                }
            </div>
            <div className='navPopActive' id='navPopActiveId' onClick={navPopClick}></div>
            <div className='popMenu' id='popMenuId'>
                <div className='popMenuTitle'>Najbardziej popularne loty</div>
                <img src={xRed} alt='xRed' className='xRed1' onClick={navPopClick}/>
                <div className='destinations'>
                    <div className='zachodnia'>EUROPA ZACHODNIA<br />
                        <div className='dest'>Lizbona</div>
                        <div className='dest'>Londyn</div>
                        <div className='dest'>Madryt</div>
                        <div className='dest'>Mediolan</div>
                        <div className='dest'>Oslo</div>
                    </div>
                    <div className='wschodnia'>EUROPA ŚRODKOWA I WSCHODNIA<br />
                        <div className='dest'>Budapeszt</div>
                        <div className='dest'>Bukareszt</div>
                        <div className='dest'>Kraków</div>
                        <div className='dest'>Tirana</div>
                        <div className='dest'>Wiedeń</div>
                    </div>
                    <div className='srodziemno'>REGION ŚRÓDZIEMNOMORSKI<br />
                        <div className='dest'>Ateny</div>
                        <div className='dest'>Malaga</div>
                        <div className='dest'>Neapol</div>
                        <div className='dest'>Rzym</div>
                        <div className='dest'>Teneryfa</div>
                    </div>
                    <div className='wschod'>BLISKI WSCHÓD<br />
                        <div className='dest'>Abu Zabi</div>
                        <div className='dest'>Aleksandria</div>
                        <div className='dest'>Amman</div>
                        <div className='dest'>Maskat</div>
                        <div className='dest'>Tel Awiw</div>
                    </div>
                </div> 
            </div>
            <div className='navHotel navElement'>
                <div className='navHotelText navElemText' id='navHotelTextId'>
                    <a href='https://www.booking.com/index.pl.html' target='_blank'>HOTELE</a>
                </div>
            </div>
            <div className='navHotelActive'></div>

            <div className='navCar navElement'>
                <Link to='samochody'>
                    <div className='navCarText navElemText' id='navCarTextId'>SAMOCHODY</div>
                </Link>
            </div>
            <div className='navCarActive'></div>

            <div className='navPlan navElement' onClick={navPlanClick}>
                <div className='navPlanText navElemText' id='navPlanTextId'>ZAPLANUJ</div>
                {arrowDown2 ?
                (briefShowed ?
                <img src={downArrowGrey} alt='downArrow' className='dArrow' id='arrowIdg'/>
                :
                <img src={downArrowW} alt='downArrow' className='dArrow' id='arrowId2'/>
                )
                :
                <img src={upArrowB} alt='upArrow' className='upArrow' id='arrowId2b'/>
                }
            </div>
            <div className='navPlanActive' id='navPlanActiveId' onClick={navPlanClick}></div>
            <div className='planMenu' id='planMenuId'>
                <div className='planMenuTitle1'>Poznaj możliwości podróżowania</div>
                <img src={xRed} alt='xRed' className='xRed2' onClick={navPlanClick}/>
                <div className='planOptions1'>
                    <div className='option1'>
                        <img src={airplanePlan} alt='airplanePlan' className='airplanePlan planIcon'/>
                        <div className='option1Title'>Wybór lotu</div>
                        <div className='option1desc'>Zarezerwuj loty do wybranego lotniska obsługiwanego przez Airwizz w 
                        idealnym dniu wylotu.</div>
                    </div>
                    <div className='option2'>
                        <img src={flightsPlan} alt='flightsPlan' className='flightsPlan planIcon' />
                        <div className='option2Title'>Cele podróży</div>
                        <div className='option2desc'>Przejrzyj naszą liste kierunków iwybierz ulubione miejsce na następne wakacje.</div>
                    </div>
                    <div className='option3'>
                        <img src={finderPlan} alt='finderPlan' className='finderPlan planIcon' />
                        <div className='option3Title'>Wyszukiwarka cen</div>
                        <div className='option3desc'>Jeszcze nie masz ustalonego terminu? Wyszukaj najniższą cenę biletów na swoją podróż
                        i zarezerwuj wyjazd w najlepszej cenie.</div>
                    </div>
                    <div className='option4'>
                        <img src={destinationPlan} alt='destinationPlan' className='destinationPlan planIcon' />
                        <div className='option4Title'>Mapa do planowania podróży</div>
                        <div className='option4desc'>Zapoznaj się z naszymi trasami i obowiązującymi przepisami.</div>
                    </div>
                    <div className='option5'>
                        <img src={tripPlan} alt='tripPlan' className='tripPlan planIcon' />
                        <div className='option5Title'>Planer podróży</div>
                        <div className='option5desc'>Odkryj nasze cele podróży i daj się zainspirować - od wspaniałych wyjazdów 
                        typu "city break" w atrakcyjnej cenie po najlepsze wakacje na plaży</div>
                    </div>
                </div>
                <div className='planMenuTitle2'>Łatwo zorganizuj całe wakacje</div>
                <div className='planOptions2'>
                    <div className='option21'>
                        <img src={hotelsPlan} alt='hotelsPlan' className='hotelsPLan planIcon' />
                        <div className='option21Title'>HOTELE</div>
                        <div className='option21desc'>Zarezerwuj hotel przez Booking.com i otrzymaj 5% wartości rezerwacji w postaci
                        środków WIZZ.</div>
                    </div>
                    <div className='option22'>
                        <img src={carPlan} alt='carPlan' className='carPlan planIcon' />
                        <div className='option22Title'>SAMOCHODY</div>
                        <div className='option22desc'>Zarezerwuj samochód na Cartrawler, a otrzymasz 5% wartości rezerwacji w postaci
                        środków WIZZ.</div>
                    </div>
                    <div className='option23'>
                        <img src={busPlan} alt='busPlan' className='busPlan planIcon' />
                        <div className='option23Title'>TRANSFER LOTNISKOWY</div>
                        <div className='option23desc'>Ponad sto tras, z lotniska do twojego domu. Rezerwuj taksówki i busy.</div>
                    </div>
                </div>
            </div>

            <div className='navInfo navElement' onClick={navInfoClick}>
                <div className='navInfoText navElemText' id='navInfoTextId'>INFORMACJE I USŁUGI</div>
                {arrowDown3 ?
                (briefShowed ?
                <img src={downArrowGrey} alt='downArrow' className='dArrow' id='arrowIdg'/>
                :
                <img src={downArrowW} alt='downArrow' className='dArrow' id='arrowId3'/>
                )
                :
                <img src={upArrowB} alt='upArrow' className='upArrow' id='arrowId3b'/>
                }
            </div>
            <div className='navInfoActive' id='navInfoActiveId' onClick={navInfoClick}></div>
            <div className='infoMenu' id='infoMenuId'>
                <div className='infoMenuTitle'>Informacje i usługi</div>
                <div className='infoList'>
                    <div className='infoListCol1'>
                        <div className='infoItem1'>
                            <div className='infoItem1title'>Informacje o rezerwacji</div>
                                <div>Jak dokonać rezerwacji</div>
                                <div>Dzieci i niemowlęta</div>
                                <div>Płaności</div>
                                <div>Odprawa i wejście na pokład</div>
                                <div>Zmiana rezerwacji</div>
                                <div>Aplikacja mobilna</div>
                                <div>Korzyści z rezerwacji bezpośredniej</div>
                                <div>Airwizz loty czarterowe</div>
                                <div>Rezerwacje grupowe</div>
                        </div>
                        <div className='infoItem2'>
                            <div className='infoItem2title'>Status lotu</div>
                                <div>Aktualne statusy lotów</div>
                                <div>Opóźninie i odwołanie</div>
                        </div>
                        <div className='infoItem3'>
                            <div className='infoItem3title'>Najczęstsze pytania</div>
                                <div>Najczęstsze pytania</div>
                                <div>Aplikacja mobilna</div>
                        </div>
                    </div>

                    <div className='infoListCol2'>
                        <div className='infoItem4'>
                            <div className='infoItem4title'>Informacje o podróży</div>
                            <div>Bagaż</div>
                                <div>Urządzenia elektroniczne na pokładzie</div>
                                <div>Przydział miejsc</div>
                                <div>Dokumenty podróżne</div>
                                <div>BREXIT related travel notice</div>
                                <div>Podróż z niemowlętami i małymi dziećmi</div>
                                <div>Odlot na czas</div>
                                <div>Pomoc specjalna w przypadku zakłóceń lotów i pasażerów niepełnosprawnych</div>
                        </div>
                        <div className='infoItem5'>
                            <div className='infoItem5title'>Ceny i rabaty</div>
                                <div>Wyszukiwarka lotów</div>
                                <div>Taryfy i pakiety</div>
                                <div>Wszystkie usługi i opłaty</div>
                                <div>Zwroty środków i odszkodowania</div>
                                <div>Przewodnik po rozliczeniach</div>
                        </div>
                    </div>

                    <div className='infoListCol3'>
                        <div className='infoItem6'>
                            <div className='infoItem6title'>Usługi WIZZ</div>
                                <div>Usługi komfort na lotnisku</div>
                                <div>Blokada ceny</div>
                                <div>WIZZ Priority</div>
                                <div>WIZZ Flex</div>
                                <div>Usługi na pokładzie i magazyn pokładowy</div>
                                <div>Rodzinna oferta WIZZ</div>
                                <div>Konto WIZZ</div>
                                <div>Kupon podarunkowy</div>
                                <div>Elastyczny towarzysz podróży</div>
                                <div>Automatyczna odprawa</div>
                                <div>Miejsca obok siebie</div>
                        </div>
                        <div className='infoItem7'>
                            <div className='infoItem7title'>Członkostwa</div>
                                <div>WIZZ MultiPass</div>
                                <div>WIZZ DISCOUNT CLUB</div>
                                <div>Italy Discount Club</div>
                                <div>PRIVILEGE PASS</div>
                        </div>
                    </div>

                    <div className='infoListCol4'>
                        <div className='infoItem8'>
                                <div className='infoItem8title'>Kontakt</div>
                                    <div>Skontakuj się z nami</div>
                        </div>

                        <div className='infoItem9'>
                            <div className='infoItem9title'>Kariera</div>
                                <div>Personel pokładowy/Stewardzi</div>
                                <div>Piloci</div>
                                <div>Wizz AirPilot Academy</div>
                                <div>Pracownicy biurowi</div>
                        </div>

                        <div className='infoItem10'>
                                <div className='infoItem10title'>Investor relations</div>
                                    <div>Overview</div>
                                    <div>Investor information</div>
                                    <div>Governance</div>
                                    <div>Results & calendar</div>
                                    <div>Analyst coverage</div>
                                    <div>Investor contact</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='navBrief navElement' id='navBriefId' onClick={null}>
                <div className='navBriefText navElemText' id='navBriefTextId' onClick={showPopup}>ODPRAWA I REZERWACJE</div>
            </div>
            <div className='navBriefActive' id='navBriefActiveId' onClick={null}></div>

            <div className='navLog navElement' id='navLogId' onClick={null}>
                <div className='navLogText navElemText' id='navLogTextId' onClick={showLogin}>ZALOGUJ SIĘ</div>
            </div>
            <div className='navLogActive' id='navLogActiveId' onClick={null}></div>

            <div className='navLang navElement' id='navLangId' onClick={null}>  
                <img src={gbflag} alt='gbflag' className='gbflag' id='gbflagId' onClick={null}></img>
            </div>
            <div className='navLangActive' id='navLangActiveId' onClick={null}></div>
            
            <div id='backgroundBriefId'></div>
            <div className='briefPopup' id='briefPopupId'>
                <div className='briefPop1'>
                    <div className='briefPop2'>Znajdź rezerwację</div>
                    <img src={xRed} alt='xRed' className='xRed3' onClick={showPopup}/>
                </div>
                <div className='briefPop3'>Kod potwierdzenia</div>
                <div className='briefPop4'>Nazwisko pasażera</div>
                <div className='briefPop5'>WYSZUKAJ</div>
                <div className='briefPop6'>
                    <div className='briefPop7'>MASZ JUŻ KONTO?</div>
                    <div className='briefPop8'>ZALOGUJ SIĘ</div>
                </div>
            </div>

            <div className='loginPopup' id='loginPopupId'>
                <div className='loginPopup1'>
                    <div className='loginPop2'>Zaloguj się</div>
                    <img src={xRed} alt='xRed' className='xRed4' onClick={showLogin}/>
                </div>
                <input type='text' className='loginPopup3' placeholder='E-mail'></input>
                <div className='loginPopup4'>
                    <input type='text' className='loginPopup4a' placeholder='Hasło'></input>
                    {eyeOpen ? 
                    <img src={eyePink} alt='eye' className='eyePink' onClick={null} />
                    :
                    <img src={eye} alt='eye' className='eye' onClick={null} />
                    }
                </div>
                <div className='loginPopup5'>NIE PAMIĘTASZ HASŁA?</div>
                <div className='loginPopup6'>Subskrybuję newsletter z ofertami specjalnymi zgodnie z 
                    <div className='loginPopup6a'>informacją o polityce prywatności.</div>
                </div>
                <div className='loginPopup7'>ZALOGUJ SIĘ</div>
                <div className='loginPopup8'>ANULUJ</div>
                <div className='loginPopup9'>Ta strona jest chroniona przez reCAPTCHA i obowiązuje na niej
                    <div className='loginPopup9a'>Polityka prywatności</div>
                    oraz
                    <div className='loginPopup9b'>Warunki korzystania z usług</div>
                    Google.
                </div>
                <div className='loginPopup10'>
                    <div className='loginPopup11'>REJESTRACJA</div>
                    <div className='loginPopup12'>LOGOWANIE AGENCJI</div>
                </div>
            </div>
        </div>
    )
}