import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import MatsIcon from "../assets/icon_mats.png";
import "../styles/materialTopStyle.css";

function Top() {
	return (
		<div>
			<Container fluid className="top-material">
				<Row>
					
					<Col xs={12}>
						<Image src={MatsIcon} />
						<h1 className="h1">MATERIALS</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Top;
