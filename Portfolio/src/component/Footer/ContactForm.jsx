import { Title } from "../../ui/Title";

export const ContactForm = () => {
    return (
        <>
            <form className="row gap-2 justify-content-end">
                <h3 className="form-title col-12">  Contact Me </h3>
                <input type="text" required name="name" placeholder="Name" className="col-12 form-input"></input>
                <input type="email" required name="email" placeholder="Email" className="col-12 form-input"></input>
                <textarea placeholder="Message..." required rows="4" className="col-12 form-input"></textarea>
                <button type="submit" className="col-auto btn-submit">Send</button>
            </form>
        </>
    )
}
