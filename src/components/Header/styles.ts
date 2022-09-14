import styled from 'styled-components';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

export const HeaderContainer = styled.header`
	width: 100%;
	z-index: 2;
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.07);
	background-color: ${({ theme }) => theme.white};
`;

export const Container = styled.div`
	max-width: 1440px;
	padding: 1rem 9rem;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

	nav {
		button + button {
			margin-left: 1.5rem;
		}
	}
`;

export const Logo = styled.div`
	font-size: 1.5rem;
	text-transform: uppercase;

	span {
		font-size: 1rem;
	}
`;

export const FormContainer = styled.form`
	height: 2rem;
	padding: 0.5rem 1rem;
	border-radius: 10rem;

	background-color: ${(props) => props.theme.inputBackground};
	display: flex;
	align-items: center;
`;

export const MapIcon = styled(FaMapMarkerAlt)`
	fill: ${(props) => props.theme.dots};
	font-size: 0.9rem;
	margin-right: 0.5rem;
`;

export const InputContainer = styled.div``;

const InputBase = styled.input`
	background: none;
	border: none;
	outline: none;

	color: ${(props) => props.theme.textSecondary};
	font-size: 0.9rem;

	&::placeholder {
		color: ${(props) => props.theme.textSecondary};
	}
`;

export const InputSearch = styled(InputBase)``;

export const InputDate = styled(InputBase)`
	display: flex;
	flex-direction: row-reverse;
	gap: 0.4rem;

	&::-webkit-calendar-picker-indicator {
		/* position: absolute; */
		font-size: 0.95rem;
		opacity: 0.35;
	}
`;

export const SearchIcon = styled(FaSearch)`
	fill: ${(props) => props.theme.primary};
	font-size: 0.9rem;
	line-height: 0;
`;

export const SearchButton = styled.button`
	width: 28px;
	height: 28px;
	margin-right: -14px;
	padding: 4px 7px;
	box-shadow: 0px 3px 15px #00000014;

	border: none;
	border-radius: 10rem;
	background-color: ${(props) => props.theme.white};

	display: grid;
	place-content: center;

	transition: 0.2s;
	&:hover {
		background-color: ${(props) => props.theme.inputBackground};
	}
`;
