import styled from 'styled-components';

export const CardContainer = styled.button`
	width: 17rem;
	padding: 1.4rem 1rem;

	border: none;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.cardBackground};

	transition: 0.2s;
	&:hover {
		opacity: 0.75;
	}
`;

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	.brand-model {
		h2 {
			font-size: 1.01rem;
		}

		h3 {
			font-size: 1.01rem;
			font-weight: lighter;
			text-transform: uppercase;
		}
	}

	p {
		align-self: top;
		font-size: 1.8rem;
		font-weight: bold;
		line-height: 0;
		color: ${({ theme }) => theme.dots};
	}
`;

export const CarImage = styled.div`
	width: 100%;
	margin: 0.5rem auto 0;
	img {
		width: 90%;
		height: auto;
	}
`;

export const FooterContainer = styled.div`
	text-align: right;

	p {
		font-size: 1.5rem;
		font-weight: bold;

		span {
			font-size: 1rem;
			font-weight: lighter;
			color: ${({ theme }) => theme.textSecondary};
		}

		&::before {
			content: '$';
			font-size: 0.9rem;
			line-height: 0;
			position: relative;
			top: -10px;
			right: 4px;
		}
	}
`;
