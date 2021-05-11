import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import { setUserSession } from "../Utils/Common";

const cardStyle = {
	boxShadow: "5px 8px 24px 5px rgba(208,216,243,0.6)",
	width: "20%",
	padding: "20px",
	textAlign: "Left",
	margin: "auto",
	marginTop: "100px",
	marginBottom: "700px",
	border: "5px solid rgba(0, 0, 0, 0.05)",
	borderRadius: "25px",
};

function LoginRoute(props) {
	const username = useFormInput("");
	const password = useFormInput("");

	// handle button click of login form
	const handleLogin = () => {
		axios
			.post("https://morning-shore-28533.herokuapp.com/auth/login/", {
				username: username.value,
				password: password.value,
			})
			.then((response) => {
				console.log(response.data);
				setUserSession(response.data.user);
				props.history.push("/admin");
			});
	};

	return (
		<div className="col-md-12">
			<Card>
				<div style={cardStyle}>
					<div>
						<h1 style={{ textAlign: "Center" }}>Admin</h1>
						<div>
							<div className="form-group">
								<label>Username</label>
								<input
									type="text"
									{...username}
									className="form-control"
									name="username"
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="password"
									{...password}
									className="form-control"
									name="password"
								/>
							</div>

							<input
								type="button"
								value="Login"
								className="btn btn-secondary btn-block"
								onClick={handleLogin}
							/>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange,
	};
};

export default withRouter(LoginRoute);
