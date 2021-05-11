import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AdminPlantsRouteCreatePlant from "./AdminPlantsRouteCreatePlant";
import AdminPlantsRouteEditPlant from "./AdminPlantsRouteEditPlant";
import AdminPlantsRoutePlantsList from "./AdminPlantsRoutePlantsList";

class AdminPlantsRoute extends Component {
	render() {
		return (
			<Router>
				<div>
					<Container fluid>
						<Row>
							<Col>
								<div>
									<nav className="navbar navbar-expand-lg navbar-light bg-light">
										<Link to="/admin/plant" className="navbar-brand">
											PLANTS Database
										</Link>
										<div className="collpase navbar-collapse">
											<ul className="navbar-nav mr-auto">
												<li className="navbar-item">
													<Link to="/admin/plant" className="nav-link">
														Plants
													</Link>
												</li>
												<li className="navbar-item">
													<Link to="/admin/plant/create" className="nav-link">
														Create Plant
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
										path="/admin/plant"
										exact
										component={AdminPlantsRoutePlantsList}
									/>
									<Route
										path="/edit/:id"
										exact
										component={AdminPlantsRouteEditPlant}
									/>
									<Route
										path="/admin/plant/create"
										exact
										component={AdminPlantsRouteCreatePlant}
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

export default AdminPlantsRoute;
