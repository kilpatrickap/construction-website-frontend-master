import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AdminLabourRouteCreateLabour from "./AdminLabourRouteCreateLabour";
import AdminLabourRouteEditLabour from "./AdminLabourRouteEditLabour";
import AdminLabourRouteLabourList from "./AdminLabourRouteLabourList";

class AdminLabourRoute extends Component {
	render() {
		return (
			<Router>
				<div>
					<Container fluid>
						<Row>
							<Col>
								<div>
									<nav className="navbar navbar-expand-lg navbar-light bg-light">
										<Link to="/admin/labour" className="navbar-brand">
											LABOUR Database
										</Link>
										<div className="collpase navbar-collapse">
											<ul className="navbar-nav mr-auto">
												<li className="navbar-item">
													<Link to="/admin/labour" className="nav-link">
														Labour
													</Link>
												</li>
												<li className="navbar-item">
													<Link to="/admin/labour/create" className="nav-link">
														Create Labour
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
										path="/admin/labour"
										exact
										component={AdminLabourRouteLabourList}
									/>
									<Route
										path="/edit/:id"
										exact
										component={AdminLabourRouteEditLabour}
									/>
									<Route
										path="/admin/labour/create"
										exact
										component={AdminLabourRouteCreateLabour}
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

export default AdminLabourRoute;
