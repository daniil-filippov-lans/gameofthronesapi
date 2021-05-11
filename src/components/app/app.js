import React, { Component } from "react";
import { Col, Row, Container, Button } from "../../../node_modules/reactstrap";
import Header from "../header";
import CharacterPage from "../characterPage/";
export default class App extends Component {
	state = {
	};
	render() {
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
