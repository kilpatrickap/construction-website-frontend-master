import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import EqpmtIcon from "../assets/icon_eqpmt.png";
import "../styles/equipmentTopStyle.css";

function EquipmentTop() {
	return (
		<div>
			<Container fluid className="top-equipment">
				<Row>
					
					<Col xs={12}>
						<Image src={EqpmtIcon} />
						<h1 className="h1">EQUIPMENT</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default EquipmentTop;
