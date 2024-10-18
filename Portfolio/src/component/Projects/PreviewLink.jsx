import { LinkChainIcon } from "../../ui/Icon";

export const PreviewLink = ({ link }) => {
    const element = <div className="col-sm-6 d-flex justify-content-start align-items-center gap-2">
        <LinkChainIcon></LinkChainIcon> <a className="prjt-link" href={link}>View Code</a>
    </div>
    return (link !== "") ? element : <></>;
}