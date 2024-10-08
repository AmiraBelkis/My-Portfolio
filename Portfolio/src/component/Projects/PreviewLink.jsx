import { LinkChainIcon } from "../../ui/Icon";

export const PreviewLink = ({ link }) => {
    const element = <div className="col-sm-6">
        <LinkChainIcon></LinkChainIcon> <a href={link}>Live Preview</a>
    </div>
    return (link !== "") ? element : <></>;
}