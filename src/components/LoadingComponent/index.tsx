import Lottie from 'react-lottie';

import loading from 'src/shared/assets/lottie/loading.json';
import { Container } from './styles';

export default function LoadingComponent() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loading,
	};

	return (
		<Container>
			<Lottie options={defaultOptions} width={200} height={200} />
		</Container>
	);
}
