import { useEffect, useState } from "react"
import yaml from 'js-yaml';

export const useAbout = () => {
    const [aboutContent, setAboutContent] = useState([])

    useEffect(() => {
        fetch('/about.yml')
            .then(response => response.text())
            .then(text => {
                const data = yaml.load(text);
                setAboutContent(data.about);
            })
            .catch(console.error);
    }, []);

    return aboutContent;
}