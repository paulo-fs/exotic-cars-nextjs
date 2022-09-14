import SignButton from '../SignButton';
import {
	Container,
	FormContainer,
	HeaderContainer,
	InputSearch,
	InputDate,
	InputContainer,
	Logo,
	MapIcon,
	SearchButton,
	SearchIcon,
} from './styles';

export default function Header() {
	return (
		<HeaderContainer>
			<Container>
				<Logo>
					Exotic<span>Cars</span>
				</Logo>
				<FormContainer action="">
					<InputContainer>
						<MapIcon />
						<InputSearch type="search" placeholder="Search for your car" />
					</InputContainer>

					<InputContainer>
						<InputDate type="date" />
					</InputContainer>

					<InputContainer>
						<InputDate type="date" />
					</InputContainer>

					<SearchButton>
						<SearchIcon />
					</SearchButton>
				</FormContainer>
				<nav>
					<SignButton type="signup" />
					<SignButton type="signin" />
				</nav>
			</Container>
		</HeaderContainer>
	);
}
