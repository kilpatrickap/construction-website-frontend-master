import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberFormat from "react-number-format";


const headerStyleLarge = {
	width: "400px",
	textAlign: "left",
};

export default class AdminLabourRouteCreateLabour extends Component {
	constructor(props) {
		super(props);

		this.onChangeLabCode = this.onChangeLabCode.bind(this);
		this.onChangeLabService = this.onChangeLabService.bind(this);
		this.onChangeLabQuantity = this.onChangeLabQuantity.bind(this);
		this.onChangeLabUnit = this.onChangeLabUnit.bind(this);
		this.onChangeLabRate = this.onChangeLabRate.bind(this);
		this.onChangeLabLabourer = this.onChangeLabLabourer.bind(this);
		this.onChangeLabLocation = this.onChangeLabLocation.bind(this);
		this.onChangeLabAddress = this.onChangeLabAddress.bind(this);
		this.onChangeLabContact = this.onChangeLabContact.bind(this);
		this.onChangeLabDate = this.onChangeLabDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			lab_code: "",
			lab_service: "",
			lab_quantity: "",
			lab_unit: "",
			lab_rate: "",
			lab_labourer: "",
			lab_location: "",
			lab_address: "",
			lab_contact: "",
			lab_date: "",
		};
	}

	onChangeLabCode(e) {
		this.setState({
			lab_code: e.target.value,
		});
	}

	onChangeLabService(e) {
		this.setState({
			lab_service: e.target.value,
		});
	}

	onChangeLabQuantity(e) {
		this.setState({
			lab_quantity: e.target.value,
		});
	}

	onChangeLabUnit(e) {
		this.setState({
			lab_unit: e.target.value,
		});
	}

	onChangeLabRate(e) {
		this.setState({
			lab_rate: e.target.value,
		});
	}

	onChangeLabLabourer(e) {
		this.setState({
			lab_labourer: e.target.value,
		});
	}

	onChangeLabLocation(e) {
		this.setState({
			lab_location: e.target.value,
		});
	}

	onChangeLabAddress(e) {
		this.setState({
			lab_address: e.target.value,
		});
	}

	onChangeLabContact(e) {
		this.setState({
			lab_contact: e.target.value,
		});
	}

	onChangeLabDate(e) {
		this.setState({
			lab_date: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log("Form submitted: ");
		console.log(`Labour Code: ${this.state.lab_code}`);
		console.log(`Labour Service: ${this.state.lab_service}`);
		console.log(`Labour Quantity: ${this.state.lab_quantity}`);
		console.log(`Labour Unit: ${this.state.lab_unit}`);
		console.log(`Labour Rate: ${this.state.lab_rate}`);
		console.log(`Labour Labourer: ${this.state.lab_labourer}`);
		console.log(`Labour Location: ${this.state.lab_location}`);
		console.log(`Labour Address: ${this.state.lab_address}`);
		console.log(`Labour Contact: ${this.state.lab_contact}`);
		console.log(`Labour Date: ${this.state.lab_date}`);
		const { lab_code,lab_service, lab_quantity, lab_unit, lab_rate, lab_labourer, lab_location, lab_address, lab_contact, lab_date } = this.state;
		const newLabour = {
			lab_code: lab_code,
			lab_service: lab_service,
			lab_quantity: lab_quantity,
			lab_unit: lab_unit,
			lab_rate: lab_rate,
			lab_labourer: lab_labourer,
			lab_location: lab_location,
			lab_address: lab_address,
			lab_contact: lab_contact,
			lab_date: lab_date,
		};

		console.log(newLabour);

		axios
			.post(`https://morning-shore-28533.herokuapp.com/labour/add`, newLabour)		//before: ("https://morning-shore-28533.herokuapp.com/labour/add")		
			.then((res) => console.log(res.data));

		this.setState({
			lab_code: "",
			lab_service: "",
			lab_quantity: "",
			lab_unit: "",
			lab_rate: "",
			lab_labourer: "",
			lab_location: "",
			lab_address: "",
			lab_contact: "",
			lab_date: "",
		});
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Create New Labour Item</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<table className="table-bordered" style={{ marginTop: 20 }} >
							<thead>
								<tr>
									<th>Code</th>
									<th style={headerStyleLarge}>Service</th>
									<th>Quantity</th>
									<th>Unit</th>
									<th>Labour Rate (GHc)</th>
									<th style={headerStyleLarge}>Labourer</th>
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
												placeholder="LAB001"
												value={this.state.lab_code}
												onChange={this.onChangeLabCode}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.lab_service}
												onChange={this.onChangeLabService}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<NumberFormat
												className="form-control"
												value={this.state.lab_quantity}
												thousandSeparator={true}
												decimalScale={2}
												fixedDecimalScale={true}
												onValueChange={(values) => {
													const { formattedValue, value } = values;
													// formattedValue = $2,223.00
													// value ie, 2223
													this.setState({ lab_quantity: formattedValue });
												}}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.lab_unit}
												onChange={this.onChangeLabUnit}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<NumberFormat
												className="form-control"
												value={this.state.lab_rate}
												thousandSeparator={true}
												decimalScale={2}
												fixedDecimalScale={true}
												onValueChange={(values) => {
													const { formattedValue, value } = values;
													// formattedValue = $2,223.00
													// value ie, 2223
													this.setState({ lab_rate: formattedValue });
												}}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.lab_labourer}
												onChange={this.onChangeLabLabourer}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.lab_location}
												onChange={this.onChangeLabLocation}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="GT-012-3456"
												className="form-control"
												value={this.state.lab_address}
												onChange={this.onChangeLabAddress}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="0244123456"
												className="form-control"
												value={this.state.lab_contact}
												onChange={this.onChangeLabContact}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="3-Apr-2021"
												className="form-control"
												value={this.state.lab_date}
												onChange={this.onChangeLabDate}
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
								value="Create Labour"
								className="btn btn-primary"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
