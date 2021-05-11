import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoWhite from "../assets/logo.png";
import "../styles/topStyle.css";

function FeedbackTop() {
	return (
		<div>
			<Container fluid className="top">
				<Row>
					<Col sm="auto">
						<Image src={LogoWhite} />
					</Col>
					<Col xs={10}>
						<h1 className="h1">FEEDBACK</h1>
						<h3>Kindly send us your feedback, it is very much appreciated. Thank you.</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default FeedbackTop;
