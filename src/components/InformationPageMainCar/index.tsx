import { Container } from './styles';

export default function InformationPageMainCar() {
	return (
		<Container>
			<div className="option-header">
				<span>01</span>
				<h3>Red</h3>
			</div>

			<div className="image-container">
				<img
					src="https://firebasestorage.googleapis.com/v0/b/exotic-cars-5810f.appspot.com/o/1-1.png?alt=media&token=ec265606-367e-44f7-b095-3eca2412c53c"
					alt=""
				/>
			</div>
		</Container>
	);
}
