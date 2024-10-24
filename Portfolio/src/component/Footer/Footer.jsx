import { profiles } from "../../utils/constants"
import { ContactForm } from "./ContactForm"
import { Link } from "./Link"
import { Mail } from "./Mail"
import { Menu } from "./Menu"

export const Footer = () => {
    return (
        <div id="footer">
            <div className="row">
                <div className="col-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2 d-flex">
                                {profiles.map(
                                    (profile, index) => <Link key={index} icon={profile.icon} link={profile.link} target="_blank"></Link>
                                )}
                            </div>
                            <Mail email="ia_feliachi@esi.dz"></Mail>
                            <Mail email="fe.amirabelkis@gmail.com"></Mail>
                            <div className="col-12">
                                <Menu></Menu>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="container-fluid">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div>
    )
}