import styled from 'styled-components';

export const BackgroundMain = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.white};
`;

export const Content = styled.div`
	max-width: 1440px;
	padding: 7rem 9rem 2rem;
	margin: 0 auto;

	display: flex;
	flex-wrap: wrap;
	gap: 1.2rem;

	background-color: ${({ theme }) => theme.white};
`;
