import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberFormat from "react-number-format";


const headerStyleLarge = {
	width: "400px",
	textAlign: "left",
};





export default class AdminPlantsRouteCreatePlant extends Component {
	constructor(props) {
		super(props);

		this.onChangePlantCode = this.onChangePlantCode.bind(this);
		this.onChangePlantDescription = this.onChangePlantDescription.bind(this);
		this.onChangePlantQuantity = this.onChangePlantQuantity.bind(this);
		this.onChangePlantUnit = this.onChangePlantUnit.bind(this);
		this.onChangePlantRate = this.onChangePlantRate.bind(this);
		this.onChangePlantRenter = this.onChangePlantRenter.bind(this);
		this.onChangePlantLocation = this.onChangePlantLocation.bind(this);
		this.onChangePlantAddress = this.onChangePlantAddress.bind(this);
		this.onChangePlantContact = this.onChangePlantContact.bind(this);
		this.onChangePlantDate = this.onChangePlantDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			plant_code: "",
			plant_description: "",
			plant_quantity: "",
			plant_unit: "",
			plant_rate: "",
			plant_renter: "",
			plant_location: "",
			plant_address: "",
			plant_contact: "",
			plant_date: "",
		};
	}

	onChangePlantCode(e) {
		this.setState({
			plant_code: e.target.value,
		});
	}

	onChangePlantDescription(e) {
		this.setState({
			plant_description: e.target.value,
		});
	}

	onChangePlantQuantity(e) {
		this.setState({
			plant_quantity: e.target.value,
		});
	}

	onChangePlantUnit(e) {
		this.setState({
			plant_unit: e.target.value,
		});
	}

	onChangePlantRate(e) {
		this.setState({
			plant_rate: e.target.value,
		});
	}

	onChangePlantRenter(e) {
		this.setState({
			plant_renter: e.target.value,
		});
	}

	onChangePlantLocation(e) {
		this.setState({
			plant_location: e.target.value,
		});
	}

	onChangePlantAddress(e) {
		this.setState({
			plant_address: e.target.value,
		});
	}

	onChangePlantContact(e) {
		this.setState({
			plant_contact: e.target.value,
		});
	}

	onChangePlantDate(e) {
		this.setState({
			plant_date: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log("Form submitted: ");
		console.log(`Plant Code: ${this.state.plant_code}`);
		console.log(`Plant Description: ${this.state.plant_description}`);
		console.log(`Plant Quantity: ${this.state.plant_quantity}`);
		console.log(`Plant Unit: ${this.state.plant_unit}`);
		console.log(`Plant Rate: ${this.state.plant_rate}`);
		console.log(`Plant Renter: ${this.state.plant_renter}`);
		console.log(`Plant Location: ${this.state.plant_location}`);
		console.log(`Plant Address: ${this.state.plant_address}`);
		console.log(`Plant Contact: ${this.state.plant_contact}`);
		console.log(`Plant Date: ${this.state.plant_date}`);

		const newPlant = {
			plant_code: this.state.plant_code,
			plant_description: this.state.plant_description,
			plant_quantity: this.state.plant_quantity,
			plant_unit: this.state.plant_unit,
			plant_rate: this.state.plant_rate,
			plant_renter: this.state.plant_renter,
			plant_location: this.state.plant_location,
			plant_address: this.state.plant_address,
			plant_contact: this.state.plant_contact,
			plant_date: this.state.plant_date,
		};

		console.log(newPlant);

		axios
			.post("https://morning-shore-28533.herokuapp.com/plants/add", newPlant)					//before: ("https://morning-shore-28533.herokuapp.com/plants/add")	
			.then((res) => console.log(res.data));

		this.setState({
			plant_code: "",
			plant_description: "",
			plant_quantity: "",
			plant_unit: "",
			plant_rate: "",
			plant_renter: "",
			plant_location: "",
			plant_address: "",
			plant_contact: "",
			plant_date: "",
		});
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Create New Plant</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<table className="table-bordered" style={{ marginTop: 20 }}>
							<thead>
								<tr>
									<th>Code</th>
									<th style={headerStyleLarge}>Plant description</th>
									<th>Quantity</th>
									<th>Unit</th>
									<th>Hiring Rate (GHc)</th>
									<th style={headerStyleLarge}>Renter</th>
									<th>Location</th>
									<th>Digital Address</th>
									<th>Contact</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="EQP001"
												value={this.state.plant_code}
												onChange={this.onChangePlantCode}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.plant_description}
												onChange={this.onChangePlantDescription}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<NumberFormat
												className="form-control"
												value={this.state.plant_quantity}
												thousandSeparator={true}
												decimalScale={2}
												fixedDecimalScale={true}
												onValueChange={(values) => {
													const { formattedValue, value } = values;
													// formattedValue = $2,223.00
													// value ie, 2223
													this.setState({ plant_quantity: formattedValue });
												}}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.plant_unit}
												onChange={this.onChangePlantUnit}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<NumberFormat
												className="form-control"
												value={this.state.plant_rate}
												thousandSeparator={true}
												decimalScale={2}
												fixedDecimalScale={true}
												onValueChange={(values) => {
													const { formattedValue, value } = values;
													// formattedValue = $2,223.00
													// value ie, 2223
													this.setState({ plant_rate: formattedValue });
												}}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.plant_renter}
												onChange={this.onChangePlantRenter}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.plant_location}
												onChange={this.onChangePlantLocation}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="GT-012-3456"
												className="form-control"
												value={this.state.plant_address}
												onChange={this.onChangePlantAddress}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="0244123456"
												className="form-control"
												value={this.state.plant_contact}
												onChange={this.onChangePlantContact}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="3-Apr-2021"
												className="form-control"
												value={this.state.plant_date}
												onChange={this.onChangePlantDate}
											/>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div>
						<div className="form-group">
							<input
								type="submit"
								value="Create Plant"
								className="btn btn-primary"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
