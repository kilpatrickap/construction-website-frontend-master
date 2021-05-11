import React, { Component } from "react";
import axios from "axios";
import AdminLabourRouteTableRow from "./AdminLabourRouteTableRow";

export default class AdminLabourRouteLabourList extends Component {
	constructor(props) {
		super(props);
		this.state = { labour: [] };
	}

	componentDidMount() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/labour/")				//before: ("https://morning-shore-28533.herokuapp.com/labour/")	
			.then((response) => {
				this.setState({ labour: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	componentDidUpdate() {
		axios
			.get("https://morning-shore-28533.herokuapp.com/labour/")						//before: ("https://morning-shore-28533.herokuapp.com/labour/")	
			.then((response) => {
				this.setState({ labour: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.labour.map(function (object, i) {
			return <AdminLabourRouteTableRow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div>
				<h3>Labour List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Code</th>
							<th>Service</th>
							<th>Quantity</th>
							<th>Unit</th>
							<th>Labour Rate (GHc)</th>
							<th>Labourer</th>
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
