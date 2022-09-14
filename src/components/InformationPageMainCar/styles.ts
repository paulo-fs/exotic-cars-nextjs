import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	position: relative;

	.option-header {
		text-align: right;
		position: absolute;
		right: 0;
		span {
			font-size: 3rem;
			font-weight: bold;
			line-height: 0.4;
		}
		h3 {
			font-size: 1.9rem;
			font-weight: lighter;
			color: ${({ theme }) => theme.textSecondary};
		}
	}

	.image-container {
		width: 100%;
		display: grid;
		place-content: center;

		img {
			width: 85%;
			margin-left: 4rem;
		}
	}
`;
