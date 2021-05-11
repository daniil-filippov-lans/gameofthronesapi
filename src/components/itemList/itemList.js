import gotService from "../../services/gotService";
	gotService = new gotService();
	componentDidMount() {
		this.gotService.getAllCharacters().then(charList => {
			this.setState({
				charList,
			});
		});
	}
