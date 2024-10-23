import { SubTitle } from "../../ui/SubTitle";
import { Title } from "../../ui/Title";
import { TechItem } from "./TechItem";
import { Slider_ } from "../../ui/Slider";
import { useTechnologies } from "../../hooks/useTechnologies";

export const Technology = () => {
    const technologies = useTechnologies();

    return (<>
        <div id="technologies" className="container">
            <div className="row">
                <Title title="Technologies"></Title>
                <SubTitle subTitle=" Technologies I’ve been working with recently "></SubTitle>
            </div>
            <div className="row">
                <div className="slider-container">
                    <Slider_ >
                        {
                            technologies.map((techItem, index) => {
                                return <TechItem key={index} name={techItem.name} logo={`/src/assets/img/tech/${techItem.logo}`} description={techItem.description}></TechItem>
                            })
                        }
                    </Slider_>
                </div>
            </div>
        </div>
    </>);
}