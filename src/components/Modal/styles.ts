import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	place-content: center;

	position: absolute;
	top: 0;
	left: 0;
`;

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(5px);

	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
`;

export const ModalElement = styled.div`
	width: 28rem;
	padding: 2rem;
	border: none;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.white};
	box-shadow: -8px 10px 30px rgba(0, 0, 0, 0.2);

	z-index: 4;

	.header {
		display: flex;
		justify-content: space-between;
	}

	.close {
		border: none;
		background-color: transparent;
		padding: 0.5rem;
	}

	.content {
		padding: 2rem 0;
	}
`;

export const IconClose = styled(IoIosCloseCircleOutline)`
	font-size: 2rem;
	fill: ${({ theme }) => theme.textSecondary};

	&:hover {
		fill: ${({ theme }) => theme.primary};
	}
`;
