import type { AppProps } from 'next/app';
import { Layout } from 'src/components';
import { ContextProvider } from 'src/shared/context';
import { defaultTheme } from 'src/shared/styles/theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ContextProvider>
		</ThemeProvider>
	);
}

export default MyApp;
