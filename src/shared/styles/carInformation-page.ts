import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const Background = styled.div`
	width: 100vw;
	height: auto;
	position: relative;
	top: 0;
	left: 0;
	z-index: 0;
	background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%);
	background-size: auto;
`;

export const Container = styled.div`
	max-width: 1440px;
	height: 100vh;
	padding: 7rem 9rem 2rem;
	margin: 0 auto;

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 5rem;
	}

	nav > button {
		min-width: 11.5rem;
		padding: 0.4rem;
		border-radius: 10rem;
		border: 1px solid ${({ theme }) => theme.text};

		box-shadow: 0px 5px 20px #0000001a;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.7rem;

		transition: 0.2s;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.7rem;
		}
	}

	.back {
		&:hover {
			background-color: ${({ theme }) => theme.dots};
			border: 1px solid ${({ theme }) => theme.dots};
		}
	}

	.book {
		background-color: ${({ theme }) => theme.text};
		color: ${({ theme }) => theme.white};
		&:hover {
			background-color: ${({ theme }) => theme.textSecondary};
			border: 1px solid ${({ theme }) => theme.textSecondary};
		}
	}

	@media (max-width: 1200px) {
		padding: 6rem 4rem 2rem;
	}

	@media (max-width: 1024px) {
		padding: 5.5rem 2rem 2rem;
	}

	@media (max-width: 768px) {
		padding: 5rem 2rem 2rem;

		nav {
			gap: 2rem;
		}
	}

	@media (max-width: 480px) {
		padding: 6rem 2rem 4rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		nav {
			margin-top: 2rem;
		}
	}
`;

export const IconLeftArrow = styled(IoIosArrowRoundBack)`
	font-size: 1.8rem;
	line-height: 0;
	margin-top: 2px;
`;

export const IconRightArrow = styled(IoIosArrowRoundForward)`
	font-size: 1.8rem;
	line-height: 0;
	margin-top: 2px;
	fill: ${({ theme }) => theme.white};
`;
