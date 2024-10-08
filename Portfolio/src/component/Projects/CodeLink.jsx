import { GithubIcon } from "../../ui/Icon";

export const CodeLink = ({ link }) => {
    const element = <div className="col-sm-6">
        <GithubIcon></GithubIcon> <a className="prjt-link" href={link}>View Code</a>
    </div>
    return (link !== "") ? element : <></>;
}