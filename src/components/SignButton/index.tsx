import { useContext } from 'react';
import { Context, ModalOption } from 'src/shared/context';
import { SignIn, SignUp } from './styles';

interface ButtonProps {
	type: 'signin' | 'signup';
}

export default function SignButton({ type }: ButtonProps) {
	const { handleOpenModal, handleModalContent } = useContext(Context);

	function handleSignIn() {
		handleOpenModal();
		handleModalContent(ModalOption.SIGNIN);
	}

	function handleSignUp() {
		handleOpenModal();
		handleModalContent(ModalOption.SIGNUP);
	}

	if (type === 'signin') {
		return <SignIn onClick={handleSignIn}>Sign in</SignIn>;
	} else {
		return <SignUp onClick={handleSignUp}>Sign up</SignUp>;
	}
}
