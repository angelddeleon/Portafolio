import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './EmailComponent.css'

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

  return (
    <div>
        <h3 className='form-text'>Send me a email if you want me to be part of your team</h3>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input className='send-input' type="submit" value="Send" />
        </form>
    </div>
    
  );
};