import Link from 'next/link';
import {
	InformationPageCarOptions,
	InformationPageHeader,
	InformationPageMainCar,
} from 'src/components';

import {
	Background,
	Container,
	IconLeftArrow,
	IconRightArrow,
} from 'src/shared/styles/carInformation-page';

export default function CarInformationPage() {
	return (
		<Background>
			<Container>
				<InformationPageHeader />
				<InformationPageMainCar />

				<nav>
					<button className="back">
						<Link href="/">
							<a>
								<IconLeftArrow />
								Back to catalog
							</a>
						</Link>
					</button>
					<button className="book">
						Book now
						<IconRightArrow />
					</button>
				</nav>

				<InformationPageCarOptions />
			</Container>
		</Background>
	);
}
