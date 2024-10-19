import { profiles } from "../../utils/constants"
import { Link } from "./Link"
import { Menu } from "./Menu"

export const Footer = () => {
    return (
        <div id="footer">
            <div className="row">
                <div className="col-8">
                    <div className="container-fluid">
                        <div className="row">
                            <Menu></Menu>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="container-fluid">
                        <div className="row">
                            {profiles.map(
                                (profile, index) => <Link key={index} icon={profile.icon} link={profile.link} target="_blank"></Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}