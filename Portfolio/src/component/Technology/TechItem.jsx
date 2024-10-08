import { Card } from "../Card";
import { Title } from "../Title";
import { Description } from "./Description";
import { Logo } from "./Logo";

export const TechItem = ({ name, logo, description }) => {
    return (<>
        <Card col="col-sm-auto">
            <Logo img={logo}></Logo>
            <Title title={name}></Title>
            <Description content={description}></Description>
        </Card>
    </>);
}