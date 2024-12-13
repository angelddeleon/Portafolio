import { ThemeButton } from './themeButton/ThemeButton';

import './Header.css';
import profilePic from '../../assets/profilePic.webp';

import { useLanguage } from '../../hooks/LanguageContext';


export function Header() {

    const { language, toggleLanguage } = useLanguage();

    const indexLanguage = language === 'en' ? 0 : 1 

    let textLanguage = [ {nav : ['About Me', 'Projects', 'Contact me'] ,saludo: 'Hi I am Angel De Leon' , description: 'I have more than 1 year experience creating web applications', button: 'Contact me'} , {nav : ['Sobre mi', 'Proyectos', 'Contactame'] ,saludo : 'Hola Soy Angel De Leon', description: 'Tengo mas de 1 ano de experiencia creando aplicaciones web', button:'Contactame' }]

    return (
        <section id='aboutme' className='main-section'>
            <header>
                <nav>
                    <ul>
                        <li><a href="#aboutme">{textLanguage[indexLanguage].nav[0]}</a></li>
                        <li><a href="#project">{textLanguage[indexLanguage].nav[1]}</a></li>
                        <li><a href="#">{textLanguage[indexLanguage].nav[2]}</a></li>
                        <li><ThemeButton /></li>
                        <li>
                            <select name="" id="" onChange={toggleLanguage} value={language} >
                                <option value="">En</option>
                                <option value="">Es</option>
                            </select>
                        </li>
                    </ul>
                    
                    
                </nav>
            </header>

            <main>
                <div className='main-text'>
                    <h2>{textLanguage[indexLanguage].saludo}</h2>
                    <h1>Fullstack Developer</h1>
                    <h3>{textLanguage[indexLanguage].description}</h3>
                    <button className='contact-button'>{textLanguage[indexLanguage].button}</button>
                </div>

                <img  src={profilePic} alt="Profile" />
            </main>
        </section>
    );
}