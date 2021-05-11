import React, { Component } from "react";
import {
	withRouter,
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminMaterialsRoute from "./AdminMaterialsRoute";
import AdminPlantsRoute from "./AdminPlantsRoute";
import AdminLabourRoute from "./AdminLabourRoute";

import { removeUserSession } from "../Utils/Common";

class AdminRoute extends Component {

	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		removeUserSession();
		this.props.history.push("/login");
		console.log("Click happened");
	};

	render() {
		return (
			<div>
				<Router>
					<div style={{ textAlign: "center" }}>
						<Link to="/admin">
							<h3>Admin</h3>
						</Link>
					</div>
					<Switch>
						<div>
							<div style={{ textAlign: "center" }}>
								<Link to="/admin/materials" style={{ padding: 5 }}>
									<button type="button" className="btn btn-secondary">
										Materials
									</button>
								</Link>

								<Link to="/admin/plant" style={{ padding: 5 }}>
									<button type="button" className="btn btn-secondary">
										Plant
									</button>
								</Link>
								<Link to="/admin/labour" style={{ padding: 5 }}>
									<button type="button" className="btn btn-secondary">
										Labour
									</button>
								</Link>

								<Link to="/login" style={{ padding: 5 }}>
									<button
										type="button"
										className="btn btn-danger"
										onClick={this.handleLogout}
									>
										Logout
									</button>
								</Link>
							</div>

							<br />

							<Route
								path="/admin/materials"
								exact
								component={AdminMaterialsRoute}
							/>
							<Route path="/admin/plant" exact component={AdminPlantsRoute} />
							<Route path="/admin/labour" exact component={AdminLabourRoute} />
						</div>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default withRouter(AdminRoute);
