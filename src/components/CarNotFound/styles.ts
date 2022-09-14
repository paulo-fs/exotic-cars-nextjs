import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const NotFound = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	place-content: center;

	button {
		padding: 0.4rem 2rem;
		margin: 2rem 6rem;

		border: none;
		border-radius: 10rem;
		background-color: ${({ theme }) => theme.text};
		box-shadow: 0px 5px 20px #0000001a;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.7rem;
			color: ${({ theme }) => theme.white};
		}

		transition: 0.2s;
		&:hover {
			background-color: ${({ theme }) => theme.textSecondary};
		}
	}
`;

export const IconLeftArrow = styled(IoIosArrowRoundBack)`
	margin-top: 2px;
	font-size: 1.8rem;
	line-height: 0;
	fill: ${({ theme }) => theme.white};
`;
