import axios from "axios";
import MUIDataTable from "mui-datatables";
import React from "react";

const columns = [
	{
		name: "Code",
		label: "Code",
		options: {
			filter: false,
			sort: true,
		},
	},
	{
		name: "Equipment",
		label: "Equipment",
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: "Quantity",
		label: "Quantity",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Unit",
		label: "Unit",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "HiringRate",
		label: "Hiring Rate (GHc)",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Renter",
		label: "Renter",
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: "Location",
		label: "Location",
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: "DigitalAddress",
		label: "Digital Address",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Contact",
		label: "Contact",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Date",
		label: "Date",
		options: {
			filter: false,
			sort: false,
		},
	},
];

const options = {
	filterType: "checkbox",
};

class MuitableEquipment extends React.Component {
	state = {
		plants: [],
		data: [],
	};

	componentDidMount() {
		axios.get("https://morning-shore-28533.herokuapp.com/plants/").then((res) => {			//before: ("https://morning-shore-28533.herokuapp.com/plants/")
			const plants = res.data;
			const data = [];
			plants.map((x) =>
				data.push({
					Code: x.plant_code,
					Equipment: x.plant_description,
					Quantity: x.plant_quantity,
					Unit: x.plant_unit,
					HiringRate: x.plant_rate,
					Renter: x.plant_renter,
					Location: x.plant_location,
					DigitalAddress: x.plant_address,
					Contact: x.plant_contact,
					Date: x.plant_date,
				})
			);
			this.setState({ data });
		});
	}

	render() {
		return (
			<MUIDataTable
				title={"Equipment Rental list"}
				data={this.state.data}
				columns={columns}
				options={options}
			/>
		);
	}
}

export default MuitableEquipment;
