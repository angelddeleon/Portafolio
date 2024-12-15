

import './Contact.css'
import { EmailComponent } from './EmailComponent/EmailComponent'
import { useLanguage } from '../../hooks/LanguageContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

export function Contact() {

    const { language } = useLanguage();

    const indexLanguage = language === 'en' ? 0 : 1 
  
    let textLanguage = [ {socialMessage: 'You can find me in' } , { socialMessage: 'Tambien me puedes encontrar en' }]

    return(
        <>
            <footer id='contact-me' className="section-contact">

                <div className="contact-info">
                    <EmailComponent />

                    <div className='social-networks'>
                        <h3>{textLanguage[indexLanguage].socialMessage}</h3>

                        <div className='links' title='Github'>
                        <a href="https://github.com/angelddeleon" target='blank'>
                            <FontAwesomeIcon className='icon' icon={faGithub}></FontAwesomeIcon>
                        </a>

                        <a href="https://www.linkedin.com/in/angeldeleonsoftwaredeveloper/" target='blank' title='Linkedin'>
                            <FontAwesomeIcon className='icon'  icon={faLinkedin}></FontAwesomeIcon>
                        </a>

                        <a href="https://www.tiktok.com/@angelintechh" title='TikTok' >
                            <FontAwesomeIcon className='icon' icon={faTiktok}></FontAwesomeIcon>
                        </a>
                        

                        </div>

                        
                        
                    </div>
                                      
                </div>


            </footer>
        </>
        
    )
}