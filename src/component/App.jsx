import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Materials from "./Materials";
import Equipment from "./Equipment";
import Labour from "./Labour";
import Feedback from "./Feedback";
import AdminRoute from "./AdminRoute";
import LoginRoute from "./LoginRoute";

import PrivateRoute from "../Utils/PrivateRoute";
import PublicRoute from "../Utils/PublicRoute";


function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/materials" exact component={() => <Materials />} />
					<Route path="/equipment" exact component={() => <Equipment />} />
					<Route path="/labour" exact component={() => <Labour />} />
					<Route path="/feedback" exact component={() => <Feedback />} />
					<PrivateRoute path="/admin" exact component={() => <AdminRoute />} />
					<PublicRoute path="/login" exact component={() => <LoginRoute />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
