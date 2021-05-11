import React from "react";
import Header from "../container/Header.jsx";
import MaterialTop from "../container/MaterialTop.jsx";
import MuitableMaterials from "../container/muidataTableMaterials.js";
import Footer from "../container/Footer.jsx";
import "../styles/muiDataTableStyle.css";

function MaterialsPage() {
	return (
		<div>
			<Header />
			<MaterialTop />
			<div className="muiDataTableStyle">
				<MuitableMaterials />
			</div>
			<Footer />
		</div>
	);
}

export default MaterialsPage;
