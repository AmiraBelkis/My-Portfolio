import { Card } from "../../ui/Card";
import { Description } from "./Description";
import { TechStack } from "./TechStack";
import { Link } from "./Link";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const ProjectItem = ({ name, image, description, tech, githubLink, LiveReviewLink }) => {
    const sizePurcentage = 1440 / useWindowWidth();

    return (
        <Card col="col-sm-auto">
            <img src={`/src/assets/img/prjt/${image}`} alt="Project-img" className="prjt-img" />
            <div className="container p-3">
                <h4 className="d-flex align-items-center justify-content-center" style={{ height: `${50 * sizePurcentage}px` }}>{name}</h4>
                <Description props={{ style: { height: `${65 * sizePurcentage}px` } }} >
                    {description}
                </Description>
                <TechStack props={{ style: { height: `${50 * sizePurcentage}px` } }}>
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