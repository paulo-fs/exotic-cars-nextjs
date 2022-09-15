import { Option } from 'src/shared/interfaces';
import {
	ArrowsContainer,
	CardsContainer,
	Container,
	IconNext,
	IconPrev,
} from './styles';

interface CarOptionsProps {
	options: Option[];
	nextCar: () => void;
	prevCar: () => void;
}

export default function InformationPageCarOptions({
	options,
	nextCar,
	prevCar,
}: CarOptionsProps) {
	return (
		<Container>
			<ArrowsContainer>
				<button className="next-prev-btn" onClick={prevCar}>
					<IconPrev />
				</button>
				<button className="next-prev-btn" onClick={nextCar}>
					<IconNext />
				</button>
			</ArrowsContainer>

			<CardsContainer>
				<button>
					<img src={options[1].picture} alt="" />
				</button>
				<button>
					<img src={options[0].picture} alt="" />
				</button>
				<button>
					<img src={options[2].picture} alt="" />
				</button>
			</CardsContainer>
		</Container>
	);
}
