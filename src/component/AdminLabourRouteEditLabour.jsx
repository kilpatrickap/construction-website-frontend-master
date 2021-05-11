import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";



//Table column width styles
const headerStyleMedium = {
	width: "170px",
	textAlign: "left",
};

const headerStyleLarge = {
	width: "400px",
	textAlign: "left",
};





export default class AdminLabourRouteEditLabour extends Component {
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

	componentDidMount() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/labour/" + this.props.match.params.id)			//before: ("https://morning-shore-28533.herokuapp.com/labour/")	
			.then((response) => {
				this.setState({
					lab_code: response.data.lab_code,
					lab_service: response.data.lab_service,
					lab_quantity: response.data.lab_quantity,
					lab_unit: response.data.lab_unit,
					lab_rate: response.data.lab_rate,
					lab_labourer: response.data.lab_labourer,
					lab_location: response.data.lab_location,
					lab_address: response.data.lab_address,
					lab_contact: response.data.lab_contact,
					lab_date: response.data.lab_date,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
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
		const obj = {
			lab_code: this.state.lab_code,
			lab_service: this.state.lab_service,
			lab_quantity: this.state.lab_quantity,
			lab_unit: this.state.lab_unit,
			lab_rate: this.state.lab_rate,
			lab_labourer: this.state.lab_labourer,
			lab_location: this.state.lab_location,
			lab_address: this.state.lab_address,
			lab_contact: this.state.lab_contact,
			lab_date: this.state.lab_date,
		};
		console.log(obj);
		axios
			.post(
				"https://morning-shore-28533.herokuapp.com/labour/update/" + this.props.match.params.id,			//before: ("https://morning-shore-28533.herokuapp.com/labour/update/")	
				obj
			)
			.then((res) => console.log(res.data));

		this.props.history.push("/admin/labour");
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Edit Labour</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<table
							className="table-bordered"
							style={{ marginTop: 20 }}
							
						>
							<thead>
								<tr>
									<th style={headerStyleMedium}>Code</th>
									<th style={headerStyleLarge}>Service</th>
									<th style={headerStyleMedium}>Quantity</th>
									<th style={headerStyleMedium}>Unit</th>
									<th style={headerStyleMedium}>Labour Rate (GHc)</th>
									<th style={headerStyleLarge}>Labourer</th>
									<th style={headerStyleMedium}>Location</th>
									<th style={headerStyleMedium}>Digital Address</th>
									<th style={headerStyleMedium}>Contact</th>
									<th style={headerStyleMedium}>Date</th>
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
								value="Edit Labour"
								className="btn btn-primary"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
