import gotService from "../../services/gotService";
	gotService = new gotService();
	updateChar = () => {
		const id = Math.floor(Math.random() * 140 + 25);
		// const id = 100000000;
		this.gotService
			.getCharacter(id)
	};
