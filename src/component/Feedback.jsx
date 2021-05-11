import React from "react";
import Header from "../container/Header.jsx";
import FeedBackTop from "../container/FeedbackTop.jsx";
import Feedback from "feeder-react-feedback";
import "feeder-react-feedback/dist/feeder-react-feedback.css";

function FeedbackPage() {
	return (
		<div>
			<Header />
			<FeedBackTop />
			<Feedback projectId="605dbf38690fbb00045cbf47" />
		</div>
	);
}

export default FeedbackPage;
