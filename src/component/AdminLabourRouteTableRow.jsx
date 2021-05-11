import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AdminLabourRouteTableRow extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/labour/delete/" + this.props.obj._id)			//before: ("https://morning-shore-28533.herokuapp.com/labour/delete/")	
			.then(console.log("Deleted"))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<tr>
				<td>{this.props.obj.lab_code}</td>
				<td>{this.props.obj.lab_service}</td>
				<td>{this.props.obj.lab_quantity}</td>
				<td>{this.props.obj.lab_unit}</td>
				<td>{this.props.obj.lab_rate}</td>
				<td>{this.props.obj.lab_labourer}</td>
				<td>{this.props.obj.lab_location}</td>
				<td>{this.props.obj.lab_address}</td>
				<td>{this.props.obj.lab_contact}</td>
				<td>{this.props.obj.lab_date}</td>
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

export default AdminLabourRouteTableRow;
