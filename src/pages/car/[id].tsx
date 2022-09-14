import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getCar } from 'src/shared/services';
import { IAllCarsResponse, Option } from 'src/shared/interfaces';

import {
	CarNotFound,
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
	const [isLoading, setIsLoading] = useState(false);
	const [carInfos, setCarInfos] = useState<IAllCarsResponse>();
	const [carOptions, setCarOptions] = useState<Option[]>();
	const [notFound, setNotFound] = useState(false);
	const router = useRouter();
	const id = Number(router.query.id);

	useEffect(() => {
		setIsLoading(true);
		getCar(id)
			.then((response) => {
				if (response) {
					setCarInfos(response);
					setCarOptions(response.options);
					return;
				}
				setNotFound(true);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (notFound) {
		return <CarNotFound />;
	}

	return (
		<Background>
			{!isLoading && carInfos?.model && (
				<Container>
					<InformationPageHeader carInfos={carInfos!} />
					<InformationPageMainCar option={carOptions![0]} />

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

					<InformationPageCarOptions options={carOptions!} />
				</Container>
			)}
		</Background>
	);
}
