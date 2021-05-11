import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/bottomStyle.css";

const singleLine = {
	display: "flex",
};

function Bottom() {
	return (
		<div>
			<Container fluid className="bottom">
				<Row>
					<Col xs lg="6">
						<h5>About</h5>
						<hr></hr>
						<p>
							const DATA center is an online database resource for construction cost
							information. We offer dependable cost data that is locally
							relevant, accurate and up-to-date. Available in online formats,
							Clients, Developers, Architects, Engineers, Quantity Surveyors and
							Contractors use const DATA center to get the relevant information they need
							to build competitive cost estimates and control construction
							costs.
						</p>
					</Col>
					<Col xs lg="4">
						{" "}
					</Col>
					<Col xs lg="2">
						<h5>Contact</h5>
						<hr></hr>
						<div style={singleLine}>
							<FontAwesomeIcon icon={faMobile} size="2x" />
							<Col xs lg="1">
								{" "}
							</Col>
							<FontAwesomeIcon icon={faWhatsapp} size="2x" />
							<Col xs lg="1">
								{" "}
							</Col>
							<p>0541193598</p>
						</div>
						<hr></hr>
						<div style={singleLine}>
							<FontAwesomeIcon icon={faEnvelope} size="2x" />
							<Col>{""}</Col>
							<p> kilpatrick@constdatacenter.com</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Bottom;
