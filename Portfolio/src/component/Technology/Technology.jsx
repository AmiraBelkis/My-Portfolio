import Card from "../Card";
import SubTitle from "../SubTitle";
import Title from "../Title";
import TechItem from "./TechItem";
import reactLogo from "../../assets/logos_react.png";

export default function Technology() {
    return (<>
        <div id="technologies" className="container">
            <div className="row">
                <Title title="Technologies"></Title>
                <SubTitle subTitle=" Technologies I’ve been working with recently "></SubTitle>
            </div>
            <div className="row">
                <TechItem name="React" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                <TechItem name="React" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                <TechItem name="React" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
            </div>
        </div>
    </>);
}