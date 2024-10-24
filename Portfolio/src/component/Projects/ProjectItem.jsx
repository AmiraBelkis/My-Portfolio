import { Card } from "../../ui/Card";
import { Description } from "./Description";
import { TechStack } from "./TechStack";
import { Link } from "./Link";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const ProjectItem = ({ name, image, description, tech, githubLink, LiveReviewLink }) => {
    const windowWidth = useWindowWidth();
    const sizePurcentage = windowWidth >= 1024 ? 1440 / windowWidth : windowWidth >= 768 ? 1024 / windowWidth : 1

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
                <div className="row">
                    <Link link={LiveReviewLink} type="preview"></Link>
                    <Link link={githubLink} type="code"></Link>
                </div>
            </div>
        </Card>
    );
}