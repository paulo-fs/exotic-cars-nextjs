import styled from 'styled-components';

interface Props {
	available: boolean;
}

export const Container = styled.div<Props>`
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

			small {
				font-size: 1.1rem;
				color: ${(props) =>
					props.available ? props.theme.primary : props.theme.warnin};
			}
		}
	}

	@media (max-width: 768px) {
		img {
			height: 6rem;
		}

		div {
			h1 {
				font-size: 2.8rem;
			}
			span {
				font-size: 1.7rem;
			}
		}
	}

	@media (max-width: 480px) {
		gap: 1rem;
		margin-bottom: 3rem;

		img {
			height: 6rem;
		}

		div {
			h1 {
				font-size: 2.2rem;
				margin-bottom: 1rem;
			}
			span {
				font-size: 1.5rem;
			}
		}
	}
`;
