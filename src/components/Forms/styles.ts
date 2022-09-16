import styled from 'styled-components';

export const FormContainer = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	input {
		padding: 0.6rem 1rem;
		border-radius: 8px;
		border: none;
		background-color: ${({ theme }) => theme.inputBackground};
		color: ${({ theme }) => theme.primary};

		&:focus {
			outline: 2px solid ${({ theme }) => theme.primary};
		}
	}

	button {
		padding: 0.6rem 1rem;
		margin-top: 1rem;
		color: ${({ theme }) => theme.primary};
		font-weight: bold;
		border: 2px solid ${({ theme }) => theme.primary};
		border-radius: 8px;
		background-color: transparent;

		transition: 0.2s;
		&:hover {
			background-color: ${({ theme }) => theme.primary};
			color: ${({ theme }) => theme.white};
		}
	}
`;
