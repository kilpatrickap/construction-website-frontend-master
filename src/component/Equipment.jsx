import React from "react";
import Header from "../container/Header.jsx";
import EquipmentTop from "../container/EquipmentTop.jsx";
import MuitableEquipment from "../container/muidataTableEquipment.js";
import Footer from "../container/Footer.jsx";

function EquipmentPage() {
	return (
		<div>
			<Header />
			<EquipmentTop />
			<div className="muiDataTableStyle">
				<MuitableEquipment />
			</div>
			<Footer />
		</div>
	);
}

export default EquipmentPage;
