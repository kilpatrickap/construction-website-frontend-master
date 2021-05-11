import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AdminMaterialsRouteCreateMaterial from "./AdminMaterialsRouteCreateMaterial";
import AdminMaterialsRouteEditMaterial from "./AdminMaterialsRouteEditMaterial";
import AdminMaterialsRouteMaterialsList from "./AdminMaterialsRouteMaterialsList";

class AdminMaterialsRoute extends Component {
	render() {
		return (
			<Router>
				<div>
					<Container fluid>
						<Row>
							<Col>
								<div>
									<nav className="navbar navbar-expand-lg navbar-light bg-light">
										<Link to="/admin/materials" className="navbar-brand">
											MATERIALS Database
										</Link>
										<div className="collpase navbar-collapse">
											<ul className="navbar-nav mr-auto">
												<li className="navbar-item">
													<Link to="/admin/materials" className="nav-link">
														Materials
													</Link>
												</li>
												<li className="navbar-item">
													<Link to="/admin/materials/create" className="nav-link">
														Create Material
													</Link>
												</li>
											</ul>
										</div>
									</nav>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									<Route
										path="/admin/materials"
										exact
										component={AdminMaterialsRouteMaterialsList}
									/>
									<Route
										path="/edit/:id"
										exact
										component={AdminMaterialsRouteEditMaterial}
									/>
									<Route
										path="/admin/materials/create"
										exact
										component={AdminMaterialsRouteCreateMaterial}
									/>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</Router>
		);
	}
}

export default AdminMaterialsRoute;
