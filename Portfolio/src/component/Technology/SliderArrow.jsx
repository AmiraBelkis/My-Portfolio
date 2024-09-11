import nextImg from "../../assets/next.png";
import prevImg from "../../assets/prev.png";
export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (

        <img src={nextImg} alt="next"
            className={className}
            style={{ ...style, display: "block", width: "52px" }}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (

        <img src={prevImg} alt="next" srcset=""
            className={className}
            style={{ ...style, display: "block", width: "52px" }}
            onClick={onClick}
        />
    );
}