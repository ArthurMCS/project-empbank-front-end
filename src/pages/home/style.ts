import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
	container: {
		padding:  20,
		height: '100vh',
		display: 'flex',
		justifyContent: 'space-between'
	},
	img: {
		width: '70%',
		objectFit: 'cover',
		borderRadius: 22,
	}
}));