import styled from 'styled-components';
import { FaAngleUp } from 'react-icons/fa';

export const Container = styled.button`
	display: none;

	width: 100%;
	height: 3rem;
	border: 0;
	background-color: ${({ theme }) => theme.secondary};

	position: fixed;
	bottom: 0;
	z-index: 3;

	transition: 0.3s;
	&:hover {
		background-color: ${({ theme }) => theme.dots};
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

export const Icon = styled(FaAngleUp)`
	font-size: 2rem;
	fill: ${({ theme }) => theme.textSecondary};
`;
