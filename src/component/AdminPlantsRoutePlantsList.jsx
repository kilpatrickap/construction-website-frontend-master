import React, { Component } from "react";
import axios from "axios";
import AdminPlantsRouteTableRow from "./AdminPlantsRouteTableRow";

export default class AdminPlantsRoutePlantsList extends Component {
	constructor(props) {
		super(props);
		this.state = { plants: [] };
	}

	componentDidMount() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/plants/")									//before: ("https://morning-shore-28533.herokuapp.com/plants/")	
			.then((response) => {
				this.setState({ plants: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	componentDidUpdate() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/plants/")									//before: ("https://morning-shore-28533.herokuapp.com/plants/")	
			.then((response) => {
				this.setState({ plants: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.plants.map(function (object, i) {
			return <AdminPlantsRouteTableRow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3>Plants List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Code</th>
							<th>Equipment</th>
							<th>Quantity</th>
							<th>Unit</th>
							<th>Rate</th>
							<th>Renter</th>
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
