

import './Contact.css'
import { EmailComponent } from './EmailComponent/EmailComponent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

export function Contact() {
    return(
        <>
            <footer className="section-contact">

                <div className="contact-info">
                    <EmailComponent />

                    <div className='social-networks'>
                        <h3>You can find me in</h3>

                        <div className='links'>
                        <a href="#">
                            <FontAwesomeIcon className='icon' icon={faGithub}></FontAwesomeIcon>
                        </a>

                        <a href="#">
                            <FontAwesomeIcon className='icon' icon={faLinkedin}></FontAwesomeIcon>
                        </a>

                        <a href="#">
                            <FontAwesomeIcon className='icon' icon={faXTwitter}></FontAwesomeIcon>
                        </a>
                        

                        </div>

                        
                        
                    </div>
                                      
                </div>


            </footer>
        </>
        
    )
}