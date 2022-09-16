import styled, { keyframes, css } from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

interface CardProps {
	fiNext: boolean;
	foNext: boolean;
	fiPrev: boolean;
	foPrev: boolean;
}

const fadeOutNext = keyframes`
	0% {left: 1rem; opacity: 1}
	100% { left: 5rem; opacity: 0}
`;

const fadeInNext = keyframes`
	0% {left: -5rem; opacity: 0}
	100% { left: 1rem; opacity: 1}
`;

const fadeOutPrev = keyframes`
	0% {left: 1rem; opacity: 1}
	100% { left: -4rem; opacity: 0}
`;

const fadeInPrev = keyframes`
	0% {left: 5rem; opacity: 0}
	100% { left: 1rem; opacity: 1}
`;

export const Container = styled.section`
	position: relative;
	margin-top: 2.5rem;
	background: transparent;

	@media (max-width: 980px) {
		margin-top: 4rem;
	}

	@media (max-width: 480px) {
		margin-top: 20rem;
	}
`;

export const ArrowsContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: absolute;
	top: 45%;

	.next-prev-btn {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 10rem;
		border: none;

		display: grid;
		place-content: center;

		background-color: ${({ theme }) => theme.text};
		transition: 0.2s;
		&:hover {
			background-color: ${({ theme }) => theme.textSecondary};
		}
	}

	@media (max-width: 480px) {
		top: -100%;
	}
`;

export const IconPrev = styled(IoIosArrowRoundBack)`
	fill: ${({ theme }) => theme.dots};
	font-size: 1.8rem;
`;

export const IconNext = styled(IoIosArrowRoundForward)`
	fill: ${({ theme }) => theme.dots};
	font-size: 1.8rem;
`;

export const CardsContainer = styled.div<CardProps>`
	height: 12rem;
	margin: 0 8rem;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	button {
		flex: 1;
		max-width: 14rem;
		height: 10rem;
		min-width: 10rem;
		position: relative;

		border: none;
		border-radius: 8px;
		background-color: ${({ theme }) => theme.background};
		box-shadow: 0px 5px 20px #0000001a;

		img {
			width: 110%;
			position: absolute;
			left: 1rem;
			top: 15%;

			animation: ${({ foNext }) =>
				foNext &&
				css`
					${fadeOutNext} .3s
				`};

			animation: ${({ fiNext }) =>
				fiNext &&
				css`
					${fadeInNext} .3s ease-out
				`};

			animation: ${({ foPrev }) =>
				foPrev &&
				css`
					${fadeOutPrev} .3s
				`};

			animation: ${({ fiPrev }) =>
				fiPrev &&
				css`
					${fadeInPrev} .3s ease-out
				`};
		}
	}

	button:nth-child(2) {
		max-width: 16rem;
		height: 12rem;
		background: rgb(134, 147, 245);
		background: linear-gradient(
			45deg,
			rgba(134, 147, 245, 1) 0%,
			rgba(241, 228, 252, 1) 100%
		);

		img {
			width: 120%;
			top: 1.8rem;
		}
	}

	@media (max-width: 1200px) {
		height: 10rem;
		margin: 0 6rem;

		button {
			max-width: 11rem;
			height: 8rem;
			min-width: 10rem;
			img {
				width: 110%;
				position: absolute;
				left: 1rem;
				top: 25%;
			}
		}

		button:nth-child(2) {
			max-width: 14rem;
			height: 10rem;
			img {
				width: 110%;
				top: 20%;
			}
		}
	}

	@media (max-width: 1024px) {
	}

	@media (max-width: 768px) {
		flex: 1;
		height: 22rem;
		margin: 0 8rem;
		position: relative;

		button {
			max-width: 14rem;
			height: 8rem;
			min-width: 10rem;
			img {
				width: 110%;
				position: absolute;
				left: 1rem;
				top: 25%;
			}
		}

		button:nth-child(2) {
			width: 18rem;
			min-width: 16rem;
			height: 12rem;

			position: absolute;
			top: 0rem;
			right: calc(50% - 25%);

			img {
				width: 110%;
				top: 20%;
			}
		}
	}

	@media (max-width: 480px) {
		flex: 1;
		height: 22rem;
		margin: -16rem 3rem 0;
		position: relative;

		button {
			max-width: 45%;
			height: 8rem;
			min-width: 10rem;
			img {
				width: 110%;
				position: absolute;
				left: 0.5rem;
				top: 25%;
			}
		}

		button:nth-child(2) {
			width: 18rem;
			min-width: 16rem;
			height: 12rem;

			position: absolute;
			top: 0rem;
			right: calc(50% - 30%);

			img {
				width: 120%;
				top: 10%;
			}
		}
	}
`;
