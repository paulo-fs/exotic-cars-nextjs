import { IAllCarsResponse } from 'src/shared/interfaces';
import { Container } from './styles';

interface CarInfoProps {
	carInfos: IAllCarsResponse;
}

export default function InformationPageHeader({ carInfos }: CarInfoProps) {
	return (
		<Container>
			<img src={carInfos.brand.logo} />

			<div>
				<h1>
					{carInfos.brand.title} {carInfos.model}
				</h1>
				<span>${carInfos.price}/day</span>
			</div>
		</Container>
	);
}
