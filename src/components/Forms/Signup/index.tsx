import { FormContainer } from '../styles';

export default function SignupForm() {
	return (
		<FormContainer>
			<input type="text" placeholder="Your name" autoFocus />
			<input type="email" placeholder="Your email" />
			<input type="password" placeholder="Password" />
			<button type="submit">Sign up now!</button>
		</FormContainer>
	);
}
