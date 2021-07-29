import React, { Component } from "react";
import { Col, Row, Container, Button } from "../../../node_modules/reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMassage from "../errorMassage";
import gotService from "../../services/gotService";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BooksPage, HousesPage, CharacterPage, BooksItem } from "../pages";

export default class App extends Component {
	gotService = new gotService();

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
			<Router>
				<div className="app">
					<Container>
						<Header />
					</Container>
					<Container>
						<Row>
							<Col lg={{ size: 5, offset: 0 }}>
								{randomChar}
								<Button 
									color="secondary"
									onClick={this.toggleRandomChar}
								>
									Toggle random character
								</Button>
							</Col>
						</Row>
						<Route
							path="/"
							exact
							component={() => <h1>Welcome to GOT DB</h1>}
						/>
						<Route path="/characters" component={CharacterPage} />
						<Route path="/houses" component={HousesPage} />
						<Route path="/books" exact component={BooksPage} />
						<Route
							path="/books/:id"
							render={({ match }) => {
								const { id } = match.params;
								return <BooksItem bookId={id} />;
							}}
						/>
					</Container>
				</div>
			</Router>
		);
	}
}
