import { profiles } from "../../utils/constants"
import { Link } from "./Link"

export const Footer = () => {
    return (
        <div id="footer">
            <div className="row">
                <div className="col-8">
                    <div className="d-flex">
                        <div className="row">
                            {profiles.map(
                                (profile, index) => <Link key={index} icon={profile.icon} link={profile.link} target="_blank"></Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}