import React, { Component } from "react";
import axios from "axios";
import AdminMaterialsRouteTableRow from "./AdminMaterialsRouteTableRow";

export default class AdminMaterialsRouteMaterialsList extends Component {
	constructor(props) {
		super(props);
		this.state = { materials: [] };
	}

	componentDidMount() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/materials")					//before: ("https://morning-shore-28533.herokuapp.com/materials/materials/")	
			.then((response) => {
				this.setState({ plants: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	componentDidUpdate() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/materials/")					//before: ("https://morning-shore-28533.herokuapp.com/materials/materials/")	
			.then((response) => {
				this.setState({ materials: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.materials.map(function (object, i) {
			return <AdminMaterialsRouteTableRow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3>Materials List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Code</th>
							<th>Materials</th>
							<th>Quantity</th>
							<th>Unit</th>
							<th>Basic Price (GHc)</th>
							<th>Supplier</th>
							<th>Location</th>
							<th>Digital Address</th>
							<th>Contact</th>
							<th>Date</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>{this.tabRow()}</tbody>
				</table>
			</div>
		);
	}
}
