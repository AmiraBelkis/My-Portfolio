import { Card } from "../../ui/Card";
import { Description } from "./Description";
import { CodeLink } from "./CodeLink";
import { PreviewLink } from "./PreviewLink";
import { TechStack } from "./TechStack";

export const ProjectItem = ({ name, image, description, tech, githubLink, LiveReviewLink }) => {
    return (
        <Card col="col-sm-auto">
            <img src={image} alt="Project-img" className="prjt-img" />
            <div className="container p-3">
                <h4>{name}</h4>
                <Description>
                    {description}
                </Description>
                <TechStack>
                    {tech}
                </TechStack>
                <div className="d-flex">
                    <PreviewLink link={LiveReviewLink}></PreviewLink>
                    <CodeLink link={githubLink}></CodeLink>
                </div>
            </div>
        </Card>
    );
}