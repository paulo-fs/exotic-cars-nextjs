import { createContext, ReactNode, useState } from 'react';

interface PropType {
	children: ReactNode;
}

export enum ModalOption {
	SIGNIN = 'SIGNIN',
	SIGNUP = 'SIGNUP',
}

interface ContextTypes {
	modalIsOpen: boolean;
	modalContent: ModalOption;
	handleOpenModal: () => void;
	handleModalContent: (content: ModalOption) => void;
}

export const Context = createContext({} as ContextTypes);

export function ContextProvider({ children }: PropType) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState(ModalOption.SIGNIN);

	function handleOpenModal() {
		setModalIsOpen((prevState) => !prevState);
	}

	function handleModalContent(content: ModalOption) {
		setModalContent(content);
	}

	return (
		<Context.Provider
			value={{ modalIsOpen, modalContent, handleOpenModal, handleModalContent }}
		>
			{children}
		</Context.Provider>
	);
}
