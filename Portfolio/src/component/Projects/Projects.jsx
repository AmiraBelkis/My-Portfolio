import { SubTitle } from "../../ui/SubTitle";
import { Title } from "../../ui/Title";
import { Slider_ } from "../../ui/Slider";
import { ProjectItem } from "./ProjectItem";
import { useProjects } from "../../hooks/useProjects";

export const Projects = () => {
    const projects = useProjects();
    return (<>
        <div id="projects" className="container">
            <div className="row">
                <Title title="Projects"></Title>
                <SubTitle subTitle=" Projects I’ve worked on recently. "></SubTitle>
            </div>
            <div className="row">
                <Slider_>
                    {
                        projects.map(
                            (item, index) => <ProjectItem key={index} {...item}  ></ProjectItem>
                        )
                    }
                </Slider_>
            </div>
        </div>
    </>);
}