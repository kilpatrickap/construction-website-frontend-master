import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import Kil from "../assets/kil.png";
import Emma from "../assets/Emma.jpg";
import Kwasi from "../assets/Kwasi.jpg";

const carouselStyle = {
	backgroundColor: "#7eca9c",
	paddingTop: "20px",
	paddingBottom: "20px",
	textAlign: "center",
};

const testimonialImage = {
	width: "150px",
	height: "150px",
	borderRadius: "100%",
	margin: "auto",
	textAlign: "left",
	position: "relative",
	right: "350px",
};

const carouselTextStyle = {
    color: "#40394a",
}

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div>
			<Container fluid style={carouselStyle}>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<img
							style={testimonialImage}
							// className="d-block w-100"
							src={Kil}
							alt="First slide"
						/>
						<Carousel.Caption style={carouselTextStyle}>
							<h3>Kilpatrick, Consar Limited, Accra</h3>
							<p>"A very useful site."</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							style={testimonialImage}
							// className="d-block w-100"
							src={Emma}
							alt="Second slide"
						/>

						<Carousel.Caption style={carouselTextStyle}>
							<h3>Emmanuel, Consar Limited, Accra</h3>
							<p>"Lets make things simple. Just click for the solution."</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							style={testimonialImage}
							// className="d-block w-100"
							src={Kwasi}
							alt="Third slide"
						/>

						<Carousel.Caption style={carouselTextStyle}>
							<h3>Kwasi Banful, Consar Limited, Accra</h3>
							<p>"Effective data for construction teams."</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</div>
	);
}

export default ControlledCarousel;
