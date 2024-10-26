import Alert from 'react-bootstrap/Alert';
import { alertTypes } from '../../utils/constants';
import { useRef } from 'react';
import { useEmail } from '../../hooks/useEmail';

export const ContactForm = () => {
    const form = useRef();
    const [loading, alert, setAlert, sendEmail] = useEmail(form);
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
