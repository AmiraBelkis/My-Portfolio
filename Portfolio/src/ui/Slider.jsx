import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextImg from "../assets/next.png";
import prevImg from "../assets/prev.png";
const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SliderArrow icon={nextImg} />,
    prevArrow: <SliderArrow icon={prevImg} />
};
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
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}