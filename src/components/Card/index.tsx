import Image from 'next/image';
import { IAllCarsResponse } from 'src/shared/interfaces';
import {
	CardContainer,
	CarImage,
	FooterContainer,
	HeaderContainer,
} from './styles';

interface CardProps {
	car: IAllCarsResponse;
}

export default function Card({ car }: CardProps) {
	return (
		<CardContainer>
			<HeaderContainer>
				<div className="brand-model">
					<h2>{car.brand.title}</h2>
					<h3>{car.model}</h3>
				</div>
				<p>...</p>
			</HeaderContainer>

			<CarImage>
				<img src={car.small_picture} />
			</CarImage>

			<FooterContainer>
				<p className="rent-value">
					{car.price}
					<span>/day</span>
				</p>
			</FooterContainer>
		</CardContainer>
	);
}
