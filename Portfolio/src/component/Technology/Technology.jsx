import { SubTitle } from "../../ui/SubTitle";
import { Title } from "../../ui/Title";
import { TechItem } from "./TechItem";
import reactLogo from "../../assets/logos_react.png";
import { Slider_ } from "../../ui/Slider";

export const Technology = () => {

    return (<>
        <div id="technologies" className="container">
            <div className="row">
                <Title title="Technologies"></Title>
                <SubTitle subTitle=" Technologies I’ve been working with recently "></SubTitle>
            </div>
            <div className="row">
                <div className="slider-container">
                    <Slider_ >
                        <TechItem name="React1" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                        <TechItem name="React2" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                        <TechItem name="React3" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                        <TechItem name="React4" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                        <TechItem name="React5" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                    </Slider_>
                </div>
            </div>
        </div>
    </>);
}