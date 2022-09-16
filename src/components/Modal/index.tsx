import { useContext } from 'react';
import { Context } from 'src/shared/context';
import { SignupForm, SignInForm } from '../index';

import { Container, IconClose, ModalElement, Overlay } from './styles';

export default function Modal() {
	const { modalContent, handleOpenModal } = useContext(Context);

	return (
		<Container>
			<ModalElement>
				<div className="header">
					<h1>{modalContent === 'SIGNUP' ? 'Sign up' : 'Sign in'}</h1>
					<button className="close" onClick={handleOpenModal}>
						<IconClose />
					</button>
				</div>

				<div className="content">
					{modalContent === 'SIGNUP' && <SignupForm />}
					{modalContent === 'SIGNIN' && <SignInForm />}
				</div>
			</ModalElement>
			<Overlay onClick={handleOpenModal} />
		</Container>
	);
}
