import { Card } from "../../ui/Card";
import { Description } from "./Description";
import { TechStack } from "./TechStack";
import { Link } from "./Link";

export const ProjectItem = ({ name, image, description, tech, githubLink, LiveReviewLink }) => {
    return (
        <Card col="col-sm-auto">
            <img src={`/src/assets/img/prjt/${image}`} alt="Project-img" className="prjt-img" />
            <div className="container p-3">
                <h4>{name}</h4>
                <Description>
                    {description}
                </Description>
                <TechStack>
                    {tech}
                </TechStack>
                <div className="d-flex">
                    <Link link={LiveReviewLink} type="preview"></Link>
                    <Link link={githubLink} type="code"></Link>
                </div>
            </div>
        </Card>
    );
}