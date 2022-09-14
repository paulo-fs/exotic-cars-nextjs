import {
	CardContainer,
	CarImage,
	FooterContainer,
	HeaderContainer,
} from './styles';

export default function Card() {
	return (
		<CardContainer>
			<HeaderContainer>
				<div className="brand-model">
					<h2>Ferrari</h2>
					<h3>Califórnia</h3>
				</div>
				<p>...</p>
			</HeaderContainer>

			<CarImage>
				<img src="https://firebasestorage.googleapis.com/v0/b/exotic-cars-5810f.appspot.com/o/1-ferrari.png?alt=media&token=c6275d5d-9d94-41bf-b659-8f2540eb9bec" />
			</CarImage>

			<FooterContainer>
				<p className="rent-value">
					725
					<span>/day</span>
				</p>
			</FooterContainer>
		</CardContainer>
	);
}
