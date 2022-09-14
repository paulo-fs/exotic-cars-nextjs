import {
	ArrowsContainer,
	CardsContainer,
	Container,
	IconNext,
	IconPrev,
} from './styles';

export default function InformationPageCarOptions() {
	return (
		<Container>
			<ArrowsContainer>
				<button className="next-prev-btn">
					<IconPrev />
				</button>
				<button className="next-prev-btn">
					<IconNext />
				</button>
			</ArrowsContainer>

			<CardsContainer>
				<button>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/exotic-cars-5810f.appspot.com/o/1-2.png?alt=media&token=83550c27-5522-40ef-b002-7efa422d7310"
						alt=""
					/>
				</button>
				<button>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/exotic-cars-5810f.appspot.com/o/1-2.png?alt=media&token=83550c27-5522-40ef-b002-7efa422d7310"
						alt=""
					/>
				</button>
				<button>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/exotic-cars-5810f.appspot.com/o/1-2.png?alt=media&token=83550c27-5522-40ef-b002-7efa422d7310"
						alt=""
					/>
				</button>
			</CardsContainer>
		</Container>
	);
}
