import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoBlack from "../assets/logo.png";
import "../styles/topStyle.css";

function Top() {
	return (
		<div>
			<Container fluid className="top">
				<Row>
					<Col sm="auto">
						<Image src={LogoBlack} />
					</Col>
					<Col xs={10}>
						<h1 className="h1">BUILDING CONSTRUCTION COSTS DATABASE</h1>
						<h3>Informative Data for your Intelligent Cost Decisions</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Top;
