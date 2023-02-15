import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS
			theme={{
				fontFamily: 'Open sans, sans-serif',
				fontSizes: {
					xs: 10,
					sm: 12,
					md: 14,
					lg: 20,
					xl: 30,
				},
			}}
		>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
