import { profiles } from "../../utils/constants"
import { ContactForm } from "./ContactForm"
import { Link } from "./Link"
import { Mail } from "./Mail"
import { Menu } from "./Menu"

export const Footer = () => {
    return (
        <div id="contact">
            <div className="row flex-wrap-reverse">
                <div className="col-md-8">
                    <div className="container-fluid">
                        <div className="row gap-5">
                            <div className="col-2 d-flex gap-3">
                                {profiles.map(
                                    (profile, index) => <Link key={index} icon={profile.icon} link={profile.link} target="_blank"></Link>
                                )}
                            </div>
                            <Mail email="ia_feliachi@esi.dz"></Mail>
                            <Mail email="fe.amirabelkis@gmail.com"></Mail>
                            <div className="col-11">
                                <Menu></Menu>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container-fluid">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div>
    )
}