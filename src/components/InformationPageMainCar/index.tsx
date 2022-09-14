import { Option } from 'src/shared/interfaces';
import { Container } from './styles';

interface MainCarProps {
	option: Option;
}

export default function InformationPageMainCar({ option }: MainCarProps) {
	return (
		<Container>
			<div className="option-header">
				<span>0{option.option}</span>
				<h3>{option.color}</h3>
			</div>

			<div className="image-container">
				<img src={option.picture} alt="" />
			</div>
		</Container>
	);
}
