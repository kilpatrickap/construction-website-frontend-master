import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LabIcon from "../assets/icon_lab.png";
import "../styles/labourTopStyle.css";

function LabourTop() {
	return (
		<div>
			<Container fluid className="top-labour">
				<Row>
					<Col xs={12}>
						<Image src={LabIcon} />
						<h1 className="h1">LABOUR</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default LabourTop;
