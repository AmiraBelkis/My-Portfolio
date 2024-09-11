import Card from "../Card";
import Title from "../Title";
import Description from "./Description";
import Logo from "./Logo";

export default function TechItem({ name, logo, description }) {
    return (<>
        <Card col="col-sm-4">
            <Logo img={logo}></Logo>
            <Title title={name}></Title>
            <Description content={description}></Description>
        </Card>
    </>);
}