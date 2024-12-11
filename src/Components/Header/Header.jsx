import { ThemeButton } from './themeButton/ThemeButton';

import './Header.css';
import profilePic from '../../assets/profilePic.webp';

export function Header() {


    return (
        <section className='main-section'>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact me</a></li>
                        <li><ThemeButton /></li>
                        <li>
                            <select name="" id="">
                                <option value="">En</option>
                                <option value="">Es</option>
                            </select>
                        </li>
                    </ul>

                    

                    
                    
                </nav>
            </header>

            <main>
                <div className='main-text'>
                    <h2>Hi I am Angel De Leon</h2>
                    <h1>Fullstack Developer</h1>
                    <h3>I have more than 1 year experience creating web applications</h3>
                    <button className='contact-button'>Contact me</button>
                </div>

                <img src={profilePic} alt="Profile" />
            </main>
        </section>
    );
}