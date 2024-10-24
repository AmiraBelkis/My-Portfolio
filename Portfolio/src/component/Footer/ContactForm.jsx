import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_4yw9oxy', 'template_h1krtp4', form.current, {
                publicKey: 'T6wWspf3dg5OUsz78',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="row gap-2 justify-content-end">
                <h3 className="form-title col-12">  Contact Me </h3>
                <input type="text" required name="name" placeholder="Name" className="col-12 form-input"></input>
                <input type="email" required name="email" placeholder="Email" className="col-12 form-input"></input>
                <textarea name="message" placeholder="Message..." required rows="4" className="col-12 form-input"></textarea>
                <button type="submit" className="col-auto btn-submit">Send</button>
            </form>
        </>
    )
}
