import { useState } from 'react';
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
	const [fiNext, setFINext] = useState(false);
	const [foNext, setFONext] = useState(false);
	const [fiPrev, setFIPrev] = useState(false);
	const [foPrev, setFOPrev] = useState(false);

	function handleAnimations() {
		if (foNext) {
			setFONext((prev) => !prev);
			setFINext((prev) => !prev);
			nextCar();
			return;
		}
		if (foPrev) {
			setFOPrev((prev) => !prev);
			setFIPrev((prev) => !prev);
			prevCar();
			return;
		}
		setFINext(false);
		setFIPrev(false);
	}

	return (
		<Container>
			<ArrowsContainer>
				<button
					className="next-prev-btn"
					onClick={() => setFOPrev((prev) => !prev)}
				>
					<IconPrev />
				</button>
				<button
					className="next-prev-btn"
					onClick={() => setFONext((prev) => !prev)}
				>
					<IconNext />
				</button>
			</ArrowsContainer>

			<CardsContainer
				fiNext={fiNext}
				foNext={foNext}
				fiPrev={fiPrev}
				foPrev={foPrev}
				onAnimationEnd={handleAnimations}
			>
				<button>
					<img
						src={options[1].picture}
						alt=""
						onClick={() => setFONext((prev) => !prev)}
					/>
				</button>
				<button>
					<img src={options[0].picture} alt="" />
				</button>
				<button>
					<img
						src={options[2].picture}
						alt=""
						onClick={() => setFOPrev((prev) => !prev)}
					/>
				</button>
			</CardsContainer>
		</Container>
	);
}
