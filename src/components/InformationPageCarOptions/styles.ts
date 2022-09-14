import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const Container = styled.section`
	position: relative;
	margin-top: 2.5rem;
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
`;

export const IconPrev = styled(IoIosArrowRoundBack)`
	fill: ${({ theme }) => theme.dots};
	font-size: 1.8rem;
`;

export const IconNext = styled(IoIosArrowRoundForward)`
	fill: ${({ theme }) => theme.dots};
	font-size: 1.8rem;
`;

export const CardsContainer = styled.div`
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
`;
