import gotService from "../../services/gotService";
import Spinner from "../spinner";
export default class RandomChar extends Component {
	gotService = new gotService();
	updateChar = () => {
		const id = Math.floor(Math.random() * 140 + 25);
		// const id = 100000000;
		this.gotService
			.getCharacter(id)
	};
	render() {
		const spinner = loading ? <Spinner /> : null;
		return (
				{spinner}
		);
	}
}
