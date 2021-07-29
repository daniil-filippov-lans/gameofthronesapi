import React, { Component } from "react";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import ErrorMassage from "../errorMassage";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock/";

export default class HousesPage extends Component {
	gotService = new gotService();

	state = {
		selectedItem: null,
		error: false,
	};

	onItemSelected = id => {
		this.setState({
			selectedItem: id,
		});
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

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllHouses}
				renderItem={({ name }) => `${name}`}
			/>
		);

		const itemDetails = (
			<ItemDetails
				itemId={this.state.selectedItem}
				getData={this.gotService.getHouse}
			>
				<Field field="region" label="Region" />
				<Field field="words" label="Words" />
				<Field field="titles" label="Titles" />
				<Field field="ancestralWeapons" label="AncestralWeapons" />
			</ItemDetails>
		);

		return <RowBlock left={itemList} right={itemDetails} />;
	}
}
