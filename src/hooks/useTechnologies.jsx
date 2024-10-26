import { useEffect, useState } from "react"
import yaml from 'js-yaml';

export const useTechnologies = () => {
    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        fetch('/technologies.yml')
            .then(response => response.text())
            .then(text => {
                const data = yaml.load(text);
                setTechnologies(data.technologies);
            })
            .catch(console.error);
    }, []);

    return technologies;
}

