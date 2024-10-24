import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextImg from "../assets/img/next.png";
import prevImg from "../assets/img/prev.png";
import { useWindowWidth } from "../hooks/useWindowWidth";

export function SliderArrow({ className, style, onClick, icon }) {
    return (
        <img src={icon} alt="next"
            className={className}
            style={{
                ...style, top: "60%", width: "auto",
                height: "auto"
            }}
            onClick={onClick}
        />
    );
}

export const Slider_ = ({ children }) => {
    const windowWidth = useWindowWidth();
    const slidesNumber = windowWidth >= 1024 ? 3 : windowWidth > 425 ? 2 : 1
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: slidesNumber,
        slidesToScroll: slidesNumber,
        nextArrow: <SliderArrow icon={nextImg} />,
        prevArrow: <SliderArrow icon={prevImg} />
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}