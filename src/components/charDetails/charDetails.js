import gotService from "../../services/gotService";
	gotService = new gotService();
		this.gotService.getCharacter(charId).then(char => {
			this.setState({ char });
		});
