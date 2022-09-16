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
	LoadingComponent,
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
	const [carImgAnimation, setCarImgAnimation] = useState(false);
	const router = useRouter();
	const id = Number(router.query.id);

	function turnOffAnimation() {
		setCarImgAnimation(false);
	}

	function nextCar() {
		const optionList = [...carOptions!];
		const removedOption = optionList.shift();
		optionList.push(removedOption!);
		setCarOptions(optionList);
		setCarImgAnimation((prev) => !prev);
	}

	function prevCar() {
		const optionList = [...carOptions!];
		const removedOption = optionList.pop();
		optionList.unshift(removedOption!);
		setCarOptions(optionList);
		setCarImgAnimation((prev) => !prev);
	}

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
		return <LoadingComponent />;
	}

	if (notFound) {
		return <CarNotFound />;
	}

	return (
		<Background>
			{!isLoading && carInfos?.model && (
				<Container>
					<InformationPageHeader carInfos={carInfos!} />
					<InformationPageMainCar
						option={carOptions![0]}
						fadeAnimation={carImgAnimation}
						turnOffAnimation={turnOffAnimation}
					/>

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

					<InformationPageCarOptions
						options={carOptions!}
						nextCar={nextCar}
						prevCar={prevCar}
					/>
				</Container>
			)}
		</Background>
	);
}
