import { Container, Icon } from './styles';

export default function FooterButton() {
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	return (
		<Container onClick={scrollToTop}>
			<Icon />
		</Container>
	);
}
