

import './Contact.css'
import { EmailComponent } from './EmailComponent/EmailComponent'
import { useLanguage } from '../../hooks/LanguageContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

export function Contact() {

    const { language, toggleLanguage } = useLanguage();

    const indexLanguage = language === 'en' ? 0 : 1 
  
    let textLanguage = [ {socialMessage: 'You can find me in' } , { socialMessage: 'Tambien me puedes encontrar en' }]

    return(
        <>
            <footer className="section-contact">

                <div className="contact-info">
                    <EmailComponent />

                    <div className='social-networks'>
                        <h3>{textLanguage[indexLanguage].socialMessage}</h3>

                        <div className='links' title='Github'>
                        <a href="#">
                            <FontAwesomeIcon className='icon' icon={faGithub}></FontAwesomeIcon>
                        </a>

                        <a href="#" title='Linkedin'>
                            <FontAwesomeIcon className='icon'  icon={faLinkedin}></FontAwesomeIcon>
                        </a>

                        <a href="#" title='X' >
                            <FontAwesomeIcon className='icon' icon={faXTwitter}></FontAwesomeIcon>
                        </a>
                        

                        </div>

                        
                        
                    </div>
                                      
                </div>


            </footer>
        </>
        
    )
}