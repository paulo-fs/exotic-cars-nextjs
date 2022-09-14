import { useContext } from 'react';
import { Context } from 'src/shared/context';

import { Container, IconClose, ModalElement, Overlay } from './styles';

export default function Modal() {
	const { modalContent, handleOpenModal } = useContext(Context);

	return (
		<Container>
			<ModalElement>
				<div className="header">
					<h1>Modal {modalContent}</h1>
					<button className="close" onClick={handleOpenModal}>
						<IconClose />
					</button>
				</div>

				<div className="content">
					<p>This feature is under construction</p>
				</div>
			</ModalElement>
			<Overlay onClick={handleOpenModal} />
		</Container>
	);
}
