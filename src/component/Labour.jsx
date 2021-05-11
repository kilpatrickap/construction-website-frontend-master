import React from "react";
import Header from "../container/Header.jsx";
import LabourTop from "../container/LabourTop.jsx";
import MuitableLabour from "../container/muidataTableLabour.js";
import Footer from "../container/Footer.jsx";

function LabourPage() {
	return (
		<div>
			<Header />
			<LabourTop />
			<div className="muiDataTableStyle">
				<MuitableLabour />
			</div>
			
			<Footer />
		</div>
	);
}

export default LabourPage;
