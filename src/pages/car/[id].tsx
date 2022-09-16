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
	const [carInfos, setCarInfos] = useState<IAllCarsResponse>();
	const [carOptions, setCarOptions] = useState<Option[]>();
	const [notFound, setNotFound] = useState(false);
	const [carImgAnimation, setCarImgAnimation] = useState(false);
	const router = useRouter();
	const { isReady } = router;
	const carId = Number(router.query.id);

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
		async function getCarInfos() {
			const response = await getCar(carId);
			setCarInfos(response);
			setCarOptions(response.options);
		}
		if (isReady) {
			getCarInfos().catch((error) => {
				console.log(error);
				setNotFound(true);
			});
		}
	}, [isReady]);

	if (notFound) {
		return <CarNotFound />;
	}

	return (
		<Background>
			<LoadingComponent />
			{carInfos?.model && (
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
