import { GithubIcon, LinkChainIcon } from "../../ui/Icon";

export const Link = ({ link, type, props }) => {
    const icon = (type === 'code') ? <GithubIcon></GithubIcon> : (type === 'preview') ? <LinkChainIcon></LinkChainIcon> : <></>
    const text = (type === 'code') ? "View Code" : (type === 'preview') ? "Live Preview" : ""
    const element = <div className="col-sm-6 d-flex justify-content-start align-items-center gap-2" {...props}>
        {icon} <a className="prjt-link" href={link} target="_blank">{text}</a>
    </div>
    return link ? element : <></>;
}