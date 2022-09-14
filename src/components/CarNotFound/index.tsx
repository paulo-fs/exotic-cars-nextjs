import Link from 'next/link';
import { IconLeftArrow, NotFound } from './styles';

export default function CarNotFound() {
	return (
		<NotFound>
			<h4>Car not found, back to catalog and select another car.</h4>
			<button className="back">
				<Link href="/">
					<a>
						<IconLeftArrow />
						Back to catalog
					</a>
				</Link>
			</button>
		</NotFound>
	);
}
