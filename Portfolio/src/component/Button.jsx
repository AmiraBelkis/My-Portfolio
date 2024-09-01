import { RightArrow } from "./Icon";
export const DownloadButton = ({ filePath, fileName, title }) => {
    return (
        <a className="col-2 btn btn-primary m-2" role="button" href={filePath} download={fileName}  >{title}</a>


    );
}

export const LinkButton = ({ title, link }) => {
    return (
        <a className="col-2  btn-secondary m-2" role="button" href={link}>
            <span className="m-2">{title}</span>
            <RightArrow></RightArrow>
        </a>
    );
} 