import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMassage from "../errorMassege";

export default class RandomChar extends Component {
	gotService = new gotService();
	state = {
		error: false,
	};
	onError = err => {
		this.setState({
			error: true,
		});
	};

	updateChar = () => {
		const id = Math.floor(Math.random() * 140 + 25);
		// const id = 100000000;
		this.gotService
			.getCharacter(id)
			.catch(this.onError);
	};
	render() {
		const errorMassege = error ? <ErrorMassage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? <View char={char} /> : null;

		return (
			<div className="random-block rounded">
				{errorMassege}
				{spinner}
			</div>
		);
	}
}
