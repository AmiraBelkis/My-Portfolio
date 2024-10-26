import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { alertTypes } from '../utils/constants';

export const useEmail = (form) => {
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
