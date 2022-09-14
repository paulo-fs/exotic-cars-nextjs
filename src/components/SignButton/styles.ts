import styled from 'styled-components';

const ButtonBase = styled.button`
	padding: 6px 16px;
	font-weight: bold;
	color: ${({ theme }) => theme.primary};
	border-radius: 12px;
	border: 2px solid ${({ theme }) => theme.primary};
	background-color: ${({ theme }) => theme.white};

	transition: 0.2s;
`;

export const SignIn = styled(ButtonBase)`
	&:hover {
		color: ${({ theme }) => theme.white};
		background-color: ${({ theme }) => theme.primary};
	}
`;

export const SignUp = styled(ButtonBase)`
	border: 2px solid transparent;

	&:hover {
		background-color: ${({ theme }) => theme.inputBackground};
		border: 2px solid ${({ theme }) => theme.inputBackground};
	}
`;
