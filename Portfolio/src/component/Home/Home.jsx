import { DownloadButton, LinkButton } from "../Button";

export function Home() {
    return (
        <div id="home">
            <div className="row justify-content-center align-items-center text-center mt-5 mb-4">
                <h4 className="col-12" >Hello ! I’m Amira Belkis Feliachi</h4>
                <h1 className="col-5" >Full Stack <span className="text-primary">Web Developer</span> </h1>
            </div>
            <div className="row justify-content-center">
                <DownloadButton title="Download CV" filePath="/public/CV -Feliachi Amira Belkis.pdf" fileName="CV -Feliachi Amira Belkis.pdf" ></DownloadButton>
                <LinkButton title="About Me" link="#about" ></LinkButton>
            </div>
        </div>
    );
}