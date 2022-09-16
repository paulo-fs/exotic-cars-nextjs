import { IAllCarsResponse } from 'src/shared/interfaces';
import { Container } from './styles';

interface CarInfoProps {
	carInfos: IAllCarsResponse;
	available: boolean;
}

export default function InformationPageHeader({
	carInfos,
	available,
}: CarInfoProps) {
	return (
		<Container available={available}>
			<img src={carInfos.brand.logo} />

			<div>
				<h1>
					{carInfos.brand.title} {carInfos.model}
				</h1>
				<span>
					${carInfos.price}/day{' '}
					<small>({available ? 'available' : 'unavailable'})</small>
				</span>
			</div>
		</Container>
	);
}
