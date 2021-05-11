import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberFormat from "react-number-format";


const headerStyleLarge = {
	width: "400px",
	textAlign: "left",
};




export default class AdminMaterialsRouteCreateMaterial extends Component {
	constructor(props) {
		super(props);

		this.onChangeMatCode = this.onChangeMatCode.bind(this);
		this.onChangeMatDescription = this.onChangeMatDescription.bind(this);
		this.onChangeMatQuantity = this.onChangeMatQuantity.bind(this);
		this.onChangeMatUnit = this.onChangeMatUnit.bind(this);
		this.onChangeMatPrice = this.onChangeMatPrice.bind(this);
		this.onChangeMatSupplier = this.onChangeMatSupplier.bind(this);
		this.onChangeMatLocation = this.onChangeMatLocation.bind(this);
		this.onChangeMatAddress = this.onChangeMatAddress.bind(this);
		this.onChangeMatContact = this.onChangeMatContact.bind(this);
		this.onChangeMatDate = this.onChangeMatDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			mat_code: "",
			mat_description: "",
			mat_quantity: "",
			mat_unit: "",
			mat_price: "",
			mat_supplier: "",
			mat_location: "",
			mat_address: "",
			mat_contact: "",
			mat_date: "",
		};
	}

	onChangeMatCode(e) {
		this.setState({
			mat_code: e.target.value,
		});
	}

	onChangeMatDescription(e) {
		this.setState({
			mat_description: e.target.value,
		});
	}

	onChangeMatQuantity(e) {
		this.setState({
			mat_quantity: e.target.value,
		});
	}

	onChangeMatUnit(e) {
		this.setState({
			mat_unit: e.target.value,
		});
	}

	onChangeMatPrice(e) {
		this.setState({
			mat_price: e.target.value,
		});
	}

	onChangeMatSupplier(e) {
		this.setState({
			mat_supplier: e.target.value,
		});
	}

	onChangeMatLocation(e) {
		this.setState({
			mat_location: e.target.value,
		});
	}

	onChangeMatAddress(e) {
		this.setState({
			mat_address: e.target.value,
		});
	}

	onChangeMatContact(e) {
		this.setState({
			mat_contact: e.target.value,
		});
	}

	onChangeMatDate(e) {
		this.setState({
			mat_date: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log("Form submitted: ");
		console.log(`Material Code: ${this.state.mat_code}`);
		console.log(`Material Description: ${this.state.mat_description}`);
		console.log(`Material Quantity: ${this.state.mat_quantity}`);
		console.log(`Material Unit: ${this.state.mat_unit}`);
		console.log(`Material Price: ${this.state.mat_price}`);
		console.log(`Material Supplier: ${this.state.mat_supplier}`);
		console.log(`Material Location: ${this.state.mat_location}`);
		console.log(`Material Address: ${this.state.mat_address}`);
		console.log(`Material Contact: ${this.state.mat_contact}`);
		console.log(`Material Date: ${this.state.mat_date}`);

		const newMaterial = {
			mat_code: this.state.mat_code,
			mat_description: this.state.mat_description,
			mat_quantity: this.state.mat_quantity,
			mat_unit: this.state.mat_unit,
			mat_price: this.state.mat_price,
			mat_supplier: this.state.mat_supplier,
			mat_location: this.state.mat_location,
			mat_address: this.state.mat_address,
			mat_contact: this.state.mat_contact,
			mat_date: this.state.mat_date,
		};

		console.log(newMaterial);

		axios
			.post("https://morning-shore-28533.herokuapp.com/materials/add", newMaterial)					//before: ("https://morning-shore-28533.herokuapp.com/materials/materials/add")	
			.then((res) => console.log(res.data));

		this.setState({
			mat_code: "",
			mat_description: "",
			mat_quantity: "",
			mat_unit: "",
			mat_price: "",
			mat_supplier: "",
			mat_location: "",
			mat_address: "",
			mat_contact: "",
			mat_date: "",
		});
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Create New Material</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<table className="table-bordered" style={{ marginTop: 20 }}>
							<thead>
								<tr>
									<th>Code</th>
									<th style={headerStyleLarge}>Material description</th>
									<th>Quantity</th>
									<th>Unit</th>
									<th>Basic Price (GHc)</th>
									<th style={headerStyleLarge}>Supplier</th>
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
												placeholder="MAT001"
												value={this.state.mat_code}
												onChange={this.onChangeMatCode}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.mat_description}
												onChange={this.onChangeMatDescription}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<NumberFormat
												className="form-control"
												value={this.state.mat_quantity}
												thousandSeparator={true}
												decimalScale={2}
												fixedDecimalScale={true}
												onValueChange={(values) => {
													const { formattedValue, value } = values;
													// formattedValue = $2,223.00
													// value ie, 2223
													this.setState({ mat_quantity: formattedValue });
												}}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.mat_unit}
												onChange={this.onChangeMatUnit}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<NumberFormat
												className="form-control"
												value={this.state.mat_price}
												thousandSeparator={true}
												decimalScale={2}
												fixedDecimalScale={true}
												onValueChange={(values) => {
													const { formattedValue, value } = values;
													// formattedValue = $2,223.00
													// value ie, 2223
													this.setState({ mat_price: formattedValue });
												}}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.mat_supplier}
												onChange={this.onChangeMatSupplier}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												value={this.state.mat_location}
												onChange={this.onChangeMatLocation}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="GT-012-3456"
												className="form-control"
												value={this.state.mat_address}
												onChange={this.onChangeMatAddress}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="0244123456"
												className="form-control"
												value={this.state.mat_contact}
												onChange={this.onChangeMatContact}
											/>
										</div>
									</td>
									<td>
										<div className="form-group">
											<input
												type="text"
												placeholder="3-Apr-2021"
												className="form-control"
												value={this.state.mat_date}
												onChange={this.onChangeMatDate}
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
								value="Create Material"
								className="btn btn-primary"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
