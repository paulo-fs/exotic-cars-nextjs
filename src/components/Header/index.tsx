import { FormEvent } from 'react';
import { useToast } from 'src/shared/hooks';
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
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		useToast('warning', 'Feature under construction!');
	}

	return (
		<HeaderContainer>
			<Container>
				<Logo>
					Exotic<span>Cars</span>
				</Logo>
				<FormContainer action="" onSubmit={handleSubmit}>
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

					<SearchButton type="submit">
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
