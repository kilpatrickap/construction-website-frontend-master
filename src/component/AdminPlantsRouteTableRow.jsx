import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AdminPlantsRouteTableRow extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/plants/delete/" + this.props.obj._id)			//before: ("https://morning-shore-28533.herokuapp.com/plants/delete/")	
			.then(console.log("Deleted"))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<tr>
				<td>{this.props.obj.plant_code}</td>
				<td>{this.props.obj.plant_description}</td>
				<td>{this.props.obj.plant_quantity}</td>
				<td>{this.props.obj.plant_unit}</td>
				<td>{this.props.obj.plant_rate}</td>
				<td>{this.props.obj.plant_renter}</td>
				<td>{this.props.obj.plant_location}</td>
				<td>{this.props.obj.plant_address}</td>
				<td>{this.props.obj.plant_contact}</td>
				<td>{this.props.obj.plant_date}</td>
				<td>
					<Link
						to={"/edit/" + this.props.obj._id}
						className="btn btn-primary btn-sm"
					>
						Edit
					</Link>
				</td>
				<td>
					<button onClick={this.delete} className="btn btn-danger btn-sm">
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default AdminPlantsRouteTableRow;
