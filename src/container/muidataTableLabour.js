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
		name: "Service",
		label: "Service",
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
		name: "Rate",
		label: "Labour Rate (GHc)",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Labourer",
		label: "Labourer",
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

class MuitableLabour extends React.Component {
	state = {
		labour: [],
		data: [],
	};

	componentDidMount() {
		axios.get("https://morning-shore-28533.herokuapp.com/labour/").then((res) => {			//before: ("https://morning-shore-28533.herokuapp.com/labour/")
			const labour = res.data;
			const data = [];
			labour.map((x) =>
				data.push({
					Code: x.lab_code,
					Service: x.lab_service,
					Quantity: x.lab_quantity,
					Unit: x.lab_unit,
					Rate: x.lab_rate,
					Labourer: x.lab_labourer,
					Location: x.lab_location,
					DigitalAddress: x.lab_address,
					Contact: x.lab_contact,
					Date: x.lab_date,
				})
			);
			this.setState({ data });
		});
	}

	render() {
		return (
			<MUIDataTable
				title={"Labour Costs (All-In-Rates)"}
				data={this.state.data}
				columns={columns}
				options={options}
			/>
		);
	}
}

export default MuitableLabour;
