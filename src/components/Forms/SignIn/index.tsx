import { FormEvent } from 'react';
import { useToast } from 'src/shared/hooks';
import { FormContainer } from '../styles';

export default function SignInForm() {
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		useToast('warning', 'Feature under construction!');
	}
	return (
		<FormContainer onSubmit={handleSubmit}>
			<input type="email" placeholder="Your email" />
			<input type="password" placeholder="Password" />
			<button type="submit">Sign in now!</button>
		</FormContainer>
	);
}
