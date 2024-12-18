/*import { ThemeButton } from './themeButton/ThemeButton';*/

import { useState, useEffect } from 'react';
import './Header.css';
import profilePic from '../../assets/profilePic.webp';
import { useLanguage } from '../../hooks/LanguageContext';

export function Header() {

    const { language, toggleLanguage } = useLanguage();
    const indexLanguage = language === 'en' ? 0 : 1;

    let textLanguage = [
        {
            nav: ['About Me', 'Projects', 'Contact me'],
            saludo: 'Hi, I am Ángel De León.',
            description: 'I have more than 1 year of experience creating web applications.',
            button: 'Contact me'
        },
        {
            nav: ['Sobre mí', 'Proyectos', 'Contáctame'],
            saludo: 'Hola, soy Ángel De León.',
            description: 'Tengo más de 1 año de experiencia creando aplicaciones web.',
            button: 'Contáctame'
        }
    ];

    const handleContactClick = () => {
        window.location.hash = '#contact-me'; 
    };

    function scrollToSection(event) { 
        event.preventDefault(); 
        const targetId = event.currentTarget.getAttribute('href').slice(1); 
        const targetElement = document.getElementById(targetId); 
        if (targetElement) { 
            targetElement.scrollIntoView({ behavior: 'smooth' }); 
    } }

    const [showNav, setShowNav] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const navTimer = setTimeout(() => {
            setShowNav(true);
        }, 100); 

        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 120); 

        const imageTimer = setTimeout(() => {
            setShowImage(true);
        }, 100); 

        return () => {
            clearTimeout(navTimer);
            clearTimeout(textTimer);
            clearTimeout(imageTimer);
        };
    }, []);




    return (
        <section id='aboutme' className='main-section'>
            <header>
                <nav className={`navbar ${showNav ? 'show' : ''}`}>
                    <ul>
                        <li><a onClick={scrollToSection} href="#aboutme">{textLanguage[indexLanguage].nav[0]}</a></li>
                        <li><a onClick={scrollToSection} href="#project">{textLanguage[indexLanguage].nav[1]}</a></li>
                        <li><a onClick={scrollToSection} href="#contact-me">{textLanguage[indexLanguage].nav[2]}</a></li>
                        {/*<li><ThemeButton /></li> */}
                        <li>
                            <select onChange={toggleLanguage} value={language}>
                                <option value="en">En</option>
                                <option value="es">Es</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className={`main-text ${showText ? 'show' : ''}`}>
                    <h2>{textLanguage[indexLanguage].saludo}</h2>
                    <h1>Fullstack Developer</h1>
                    <h3>{textLanguage[indexLanguage].description}</h3>
                    <button className='contact-button' onClick={handleContactClick}>{textLanguage[indexLanguage].button}</button>
                </div>

                <img className={`profile-pic ${showImage ? 'show' : ''}`} src={profilePic} alt="Profile" />
            </main>
        </section>
    );
}