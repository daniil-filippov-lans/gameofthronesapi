import React, { Component } from "react";
import { Col, Row, Container, Button } from "../../../node_modules/reactstrap";
import Header from "../header";
import ErrorMassage from "../errorMassege";
import CharacterPage from "../characterPage/";
export default class App extends Component {
	state = {
		error: false,
	};

	componentDidCatch() {
		console.log("error");
		this.setState({
			error: true,
		});
	}

	render() {
		if (this.state.error) {
			return <ErrorMassage />;
		}
		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
					</Row>
					<CharacterPage />
					<CharacterPage />
					<CharacterPage />
				</Container>
			</>
		);
	}
}
