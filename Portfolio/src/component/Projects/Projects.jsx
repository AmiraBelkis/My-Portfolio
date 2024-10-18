import { SubTitle } from "../../ui/SubTitle";
import { Title } from "../../ui/Title";
import { Slider_ } from "../../ui/Slider";
import { ProjectItem } from "./ProjectItem";
import prjt from "../../assets/prjt.jpeg"

export const Projects = () => {

    return (<>
        <div id="projects" className="container">
            <div className="row">
                <Title title="Projects"></Title>
                <SubTitle subTitle=" Projects I’ve worked on recently. "></SubTitle>
            </div>
            <div className="row">
                <Slider_>
                    <ProjectItem name="project name 1" image={prjt} description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" tech="HTML , JavaScript, SASS, React" githubLink="http://localhost:5173/" LiveReviewLink="http://localhost:5173/#technologies"></ProjectItem>
                    <ProjectItem name="project name 2" image={prjt} description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" tech="HTML , JavaScript, SASS, React" githubLink="http://localhost:5173/" LiveReviewLink="http://localhost:5173/#technologies"></ProjectItem>
                    <ProjectItem name="project name 3" image={prjt} description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" tech="HTML , JavaScript, SASS, React" githubLink="http://localhost:5173/" LiveReviewLink="http://localhost:5173/#technologies"></ProjectItem>
                </Slider_>
            </div>
        </div>
    </>);
}