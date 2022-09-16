import { FormContainer } from '../styles';

export default function SignInForm() {
	return (
		<FormContainer>
			<input type="email" placeholder="Your email" />
			<input type="password" placeholder="Password" />
			<button type="submit">Sign in now!</button>
		</FormContainer>
	);
}
