import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { alertTypes } from '../utils/constants';

export const useEmail = (form) => {
    const jsEmailServiceID = import.meta.env.VITE_JsEmail_Service || ''
    const jsEmailTemplateID = import.meta.env.VITE_JsEmail_Template || ''
    const jsEmailPublicKey = import.meta.env.VITE_JsEmail_PublicKey || ''
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        show: false,
        ...alertTypes.success
    });
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(jsEmailServiceID, jsEmailTemplateID, form.current, {
                publicKey: jsEmailPublicKey,
            })
            .then(
                () => {
                    setAlert({
                        show: true,
                        ...alertTypes.success
                    })
                    setLoading(false);
                    form.current.reset();
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
    return [loading, alert, setAlert, sendEmail]
}
