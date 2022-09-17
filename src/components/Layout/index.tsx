import { ReactNode, useContext } from 'react';
import { ToastContainer } from 'react-toastify';

import { Context } from 'src/shared/context';

import { Header, Modal } from '../index';

import { GlobalStyle } from 'src/shared/styles/global';
import { Container } from './styles';
import 'react-toastify/dist/ReactToastify.css';

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
			<ToastContainer
				position="top-right"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				draggable={false}
				pauseOnFocusLoss={false}
				closeOnClick
				pauseOnHover
			/>
			<GlobalStyle />
		</Container>
	);
}
