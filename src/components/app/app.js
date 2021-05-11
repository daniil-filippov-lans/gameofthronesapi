import React, { Component } from "react";
import { Col, Row, Container, Button } from "../../../node_modules/reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMassage from "../errorMassege";
import CharacterPage from "../characterPage/";

export default class App extends Component {
	state = {
		showRandomChar: true,
		error: false,
	};

	componentDidCatch() {
		console.log("error");
		this.setState({
			error: true,
		});
	}

	toggleRandomChar = () => {
		this.setState({
			showRandomChar: !this.state.showRandomChar,
		});
	};

	render() {
		const { showRandomChar } = this.state;

		const randomChar = showRandomChar ? <RandomChar /> : null;

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
						<Col lg={{ size: 5, offset: 0 }}>{randomChar}</Col>
					</Row>
					<Button color="secondary" onClick={this.toggleRandomChar}>
						Toggle random character
					</Button>
					<CharacterPage />
					<CharacterPage />
					<CharacterPage />
				</Container>
			</>
		);
	}
}
