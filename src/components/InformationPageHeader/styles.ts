import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 1.5rem;
	align-items: center;

	img {
		height: 7.6rem;
	}

	div {
		h1 {
			font-size: 3.1rem;
		}

		span {
			font-size: 2rem;
			font-weight: lighter;
			color: ${({ theme }) => theme.textSecondary};
		}
	}
`;
