import React from "react";
import { Card, Button, CardDeck, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon_mats from "../assets/mats.png";
import Icon_eqpmt from "../assets/eqpmt.png";
import Icon_lab from "../assets/lab.png";
import "../styles/middleStyle.css";

const cardStyle = {
	boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
	border: "3px solid rgba(0, 0, 0, 0.05)",
	borderRadius: "10px",
};

function Middle() {
	return (
		<div className="center">
			<CardDeck>
				<Card border="gray" style={cardStyle}>
					<Card.Header>MATERIALS</Card.Header>
					<Image className="card-img" src={Icon_mats} />
					<Card.Body>
						<Card.Text>Click here for Materials cost</Card.Text>
						<Link to="/materials">
							<Button variant="secondary" size="lg" block>
								Materials
							</Button>
						</Link>
					</Card.Body>
				</Card>
				<Card border="gray" style={cardStyle}>
					<Card.Header>EQUIPMENT</Card.Header>
					<Card.Img variant="top" src={Icon_eqpmt} />
					<Card.Body>
						<Card.Text>Click here for Equipment cost</Card.Text>
						<Link to="/equipment">
							<Button variant="secondary" size="lg" block>
								Equipment
							</Button>
						</Link>
					</Card.Body>
				</Card>
				<Card border="gray" style={cardStyle}>
					<Card.Header>LABOUR</Card.Header>
					<Card.Img variant="top" src={Icon_lab} />
					<Card.Body>
						<Card.Text>Click here for Labour cost</Card.Text>
						<Link to="/labour">
							<Button variant="secondary" size="lg" block>
								Labour
							</Button>
						</Link>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>
	);
}

export default Middle;
