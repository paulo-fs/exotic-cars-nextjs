import styled from 'styled-components';

interface Props {
	complete: boolean;
}

export const Container = styled.div<Props>`
	width: 100vw;
	height: 100vh;
	background: ${({ theme }) => theme.white};
	opacity: 0.8;

	display: ${({ complete }) => (complete ? 'none' : 'grid')};
	place-content: center;

	position: absolute;
	z-index: 4;
`;
