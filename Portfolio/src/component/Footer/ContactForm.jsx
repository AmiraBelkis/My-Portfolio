import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { alertTypes } from '../../utils/constants';

export const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        show: false,
        ...alertTypes.success
    });
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm('service_4yw9oxy', 'template_h1krtp4', form.current, {
                publicKey: 'T6wWspf3dg5OUsz78',
            })
            .then(
                () => {
                    setAlert({
                        show: true,
                        ...alertTypes.success
                    })
                    setLoading(false);
                },
                (error) => {
                    setAlert({
                        show: true,
                        ...alertTypes.danger
                    })
                    setLoading(false);
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
                <button type="submit"
                    className={`col-auto btn-submit ${loading ? "active" : ""}`}>
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>
            <Alert className='form-alert' {...alert} onClose={() => setAlert({
                show: false,
                ...alertTypes.success
            })
            } dismissible></Alert>

        </>
    )
}
