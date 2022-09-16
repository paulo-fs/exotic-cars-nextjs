import { useState } from 'react';
import Lottie from 'react-lottie';

import loading from 'src/shared/assets/lottie/loading.json';
import { Container } from './styles';

export default function LoadingComponent() {
	const [complete, setComplete] = useState(false);

	const defaultOptions = {
		loop: 1,
		autoplay: true,
		animationData: loading,
	};

	return (
		<Container complete={complete}>
			<Lottie
				options={defaultOptions}
				width={200}
				height={200}
				eventListeners={[
					{
						eventName: 'complete',
						callback: () => setComplete(true),
					},
				]}
			/>
		</Container>
	);
}
