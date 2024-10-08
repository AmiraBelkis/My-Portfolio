import { GithubIcon } from "../Icon";

export default function CodeLink({ link }) {
    const element = <div className="col-sm-6">
        <GithubIcon></GithubIcon> <a className="prjt-link" href={link}>View Code</a>
    </div>
    return (link !== "") ? element : <></>;
}