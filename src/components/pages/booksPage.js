import React, { Component } from "react";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import ErrorMassage from "../errorMassege";
import gotService from "../../services/gotService";
import { withRouter } from "react-router-dom";

class booksPage extends Component {
	gotService = new gotService();

	state = {
		error: false,
	};

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}

	render() {
		if (this.state.error) {
			return <ErrorMassage />;
		}

		const itemDetails = (
			<ItemDetails
				itemId={this.state.selectedItem}
				getData={this.gotService.getBook}
			>
				<Field field="publisher" label="Publisher" />
				<Field field="numberOfPages" label="Number of pages" />
				<Field field="released" label="Released" />
			</ItemDetails>
		);

		return (
			<ItemList
				onItemSelected={itemId => {
					this.props.history.push(itemId);
				}}
				getData={this.gotService.getAllBooks}
				renderItem={({ name }) => `${name}`}
			/>
		);
	}
}

export default withRouter(booksPage);
