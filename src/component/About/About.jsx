import { useAbout } from "../../hooks/useAbout";
import { Card } from "../../ui/Card";
import { Title } from "../../ui/Title";

export const About = () => {
    const aboutContent = useAbout();

    return (
        <>
            <div id="about" className="container">
                <div className="row">
                    <Title title=" About Me "></Title>
                    <Card col="col-sm-10">
                        {aboutContent.map((content, index) => (
                            <p key={index}>{content}</p>
                        ))}
                    </Card>

                </div>
            </div >
        </>
    );
}