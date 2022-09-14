import { ReactNode, useContext } from 'react';
import { Context } from 'src/shared/context';
import { GlobalStyle } from 'src/shared/styles/global';
import Header from '../Header';
import Modal from '../Modal';
import { Container } from './styles';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const { modalIsOpen } = useContext(Context);

	return (
		<Container>
			{modalIsOpen && <Modal />}
			<Header />
			<main>{children}</main>
			<GlobalStyle />
		</Container>
	);
}
