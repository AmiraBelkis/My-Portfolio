import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubTitle from "../SubTitle";
import Title from "../Title";
import TechItem from "./TechItem";
import reactLogo from "../../assets/logos_react.png";
import { SampleNextArrow, SamplePrevArrow } from "./SliderArrow";

export default function Technology() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (<>
        <div id="technologies" className="container">
            <div className="row">
                <Title title="Technologies"></Title>
                <SubTitle subTitle=" Technologies I’ve been working with recently "></SubTitle>
            </div>
            <div className="row">
                <div className="slider-container">
                    <Slider {...settings}>
                        <TechItem name="React1" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                        <TechItem name="React2" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                        <TechItem name="React3" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                        <TechItem name="React4" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                        <TechItem name="React5" logo={reactLogo} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TechItem>
                    </Slider>
                </div>
            </div>
        </div>
    </>);
}