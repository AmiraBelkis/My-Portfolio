import { Link } from "./Link"

export const Footer = () => {
    return (
        <div id="footer">
            <div className="row">
                <div className="col-8">
                    <div className="d-flex">
                        <div className="row">
                            <Link icon="github" link="https://www.linkedin.com/feed/"></Link>
                            <Link icon="linkedin" link="https://www.linkedin.com/feed/"></Link>
                            <Link icon="upwork" link="https://www.linkedin.com/feed/"></Link>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}