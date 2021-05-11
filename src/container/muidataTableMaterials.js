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
		name: "Materials",
		label: "Materials",
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
		name: "Price",
		label: "Basic Price (GHc)",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Supplier",
		label: "Supplier",
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

class MuitableMaterials extends React.Component {
	state = {
		materials: [],
		data: [],
	};

	componentDidMount() {
		axios.get("https://morning-shore-28533.herokuapp.com/materials/").then((res) => {			//before: ("https://morning-shore-28533.herokuapp.com/materials/materials/").
			const materials = res.data;
			const data = [];
			materials.map((x) =>
				data.push({
					Code: x.mat_code,
					Materials: x.mat_description,
					Quantity: x.mat_quantity,
					Unit: x.mat_unit,
					Price: x.mat_price,
					Supplier: x.mat_supplier,
					Location: x.mat_location,
					DigitalAddress: x.mat_address,
					Contact: x.mat_contact,
					Date: x.mat_date,
				})
			);
			this.setState({ data });
		});
	}

	render() {
		return (
			<MUIDataTable
				title={"Materials Pricelist"}
				data={this.state.data}
				columns={columns}
				options={options}
			/>
		);
	}
}

export default MuitableMaterials;
