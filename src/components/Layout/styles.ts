import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.white};

	header {
		z-index: 2;
		position: absolute;
	}

	main {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		z-index: 0;
	}
`;
