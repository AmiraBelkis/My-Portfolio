import { Card } from "../../ui/Card";
import { Description } from "../Technology/Description";
import { CodeLink } from "./CodeLink";
import { PreviewLink } from "./PreviewLink";
import { TechStack } from "./TechStack";

export const ProjectItem = ({ name, image, description, tech, githubLink, LiveReviewLink }) => {
    return (
        <Card col="col-sm-auto">
            <img src={image} alt="Project-img" width="100%" />
            <div className="container p-1 pb-3">
                <h4>{name}</h4>
                <Description content={description}></Description>
                <TechStack>
                    {tech}
                </TechStack>
                <div className="row">
                    <PreviewLink link={LiveReviewLink}></PreviewLink>
                    <CodeLink link={githubLink}></CodeLink>
                </div>
            </div>
        </Card>
    );
}