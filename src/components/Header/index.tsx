import Link from 'next/link';
import { FormEvent, useState } from 'react';
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
	HamburgerButton,
	MenuIcon,
	CloseMenuButton,
	IconClose,
} from './styles';

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	function handleShowMenu() {
		setShowMenu((prevState) => !prevState);
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		useToast('warning', 'Feature under construction!');
	}

	return (
		<HeaderContainer>
			<Container showMenu={showMenu}>
				<Logo>
					<Link href="/">
						<a>
							Exotic<span>Cars</span>
						</a>
					</Link>
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

				<HamburgerButton onClick={handleShowMenu}>
					<MenuIcon />
				</HamburgerButton>

				<nav>
					<SignButton type="signup" />
					<SignButton type="signin" />

					<CloseMenuButton showMenu={showMenu} onClick={handleShowMenu}>
						<IconClose />
					</CloseMenuButton>
				</nav>
			</Container>
		</HeaderContainer>
	);
}
