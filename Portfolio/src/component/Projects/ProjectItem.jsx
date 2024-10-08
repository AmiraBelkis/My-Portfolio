import { Card } from "../../ui/Card";
import { Description } from "../Technology/Description";
import { CodeLink } from "./CodeLink";
import { PreviewLink } from "./PreviewLink";

export const ProjectItem = ({ name, image, description, githubLink, LiveReviewLink }) => {
    return (
        <Card col="col-sm-auto">
            <img src={image} alt="Project" width="100%" />
            <h4>{name}</h4>
            <Description content={description}></Description>
            <div className="row">
                <PreviewLink link={LiveReviewLink}></PreviewLink>
                <CodeLink link={githubLink}></CodeLink>

            </div>
        </Card>
    );
}