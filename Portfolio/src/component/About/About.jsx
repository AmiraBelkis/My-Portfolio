import Card from "../Card";
import Title from "../Title";

export default function About() {
    const aboutContent = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis diam orci.  Maecenas at tortor tristique, efficitur ligula non, condimentum lectus. Cras tincidunt tempus mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "  Morbi quis diam orci. Maecenas at tortor tristique, efficitur ligula non, condimentum lectus. Cras tincidunt tempus mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi "
    ]

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