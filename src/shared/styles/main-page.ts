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
	align-items: center;
	justify-content: center;
	gap: 1.2rem;

	background-color: ${({ theme }) => theme.white};

	@media (max-width: 1200px) {
		padding: 7rem 4rem 2rem;
	}

	@media (max-width: 1024px) {
		padding: 6rem 2rem 2rem;
	}

	@media (max-width: 768px) {
		padding: 5rem 2rem 4rem;
	}
`;
