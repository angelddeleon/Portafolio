import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './EmailComponent.css'

import { useLanguage } from '../../../hooks/LanguageContext';

export const EmailComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a2ybvhk', 'template_a4mtrvr', form.current, {
        publicKey: 'FNDCrkg40KEPWTTUI',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const { language } = useLanguage();

  const indexLanguage = language === 'en' ? 0 : 1 

  let textLanguage = [ 
    {message : 'Send me an email if you want me to be part of your team', form: ['Name', 'Email', 'Message'], socialMessage: 'You can find me in' } , {message : 'Envíame un correo electrónico si deseas que forme parte de tu equipo.', form: ['Nombre', 'Email', 'Mensaje'], socialMessage: 'También me puedes encontrar en' }]


  return (
    <div>
        <h3 className='form-text'>{textLanguage[indexLanguage].message}</h3>
        <form ref={form} onSubmit={sendEmail}>
            <label>{textLanguage[indexLanguage].form[0]}</label>
            <input type="text" name="user_name" />
            <label>{textLanguage[indexLanguage].form[1]}</label>
            <input type="email" name="user_email" />
            <label>{textLanguage[indexLanguage].form[2]}</label>
            <textarea name="message" />
            <input className='send-input' type="submit" value="Send" />
        </form>
    </div>
    
  );
};