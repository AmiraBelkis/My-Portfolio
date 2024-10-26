import { useEffect, useState } from "react"
import yaml from 'js-yaml';

export const useProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects.yml')
            .then(response => response.text())
            .then(text => {
                const data = yaml.load(text);
                setProjects(data.projects);
            })
            .catch(console.error);
    }, []);

    return projects;
}

