import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    form: {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 46,
        width: 500,
    },
    title: {
        width: 395,
        weight: 700,
        fontSize: 32,
        lineHeight: '43.2px',
        textAlign: 'initial',
    },
    registerButton: {
        backgroundColor: '#60CFFA',
        borderRadius: 16,
        height: 64,
        gap: 10,
        padding: '17px, 32px, 17px, 32px',
        width: 390,
        fontSize: 20,

        '&:hover': {
          backgroundColor: theme.fn.darken('#60CFFA', 0.05),
        }
    },
    loginButton: {
        backgroundColor: '#2D303D',
        borderRadius: 16,
        height: 64,
        gap: 10,
        padding: '17px, 32px, 17px, 32px',
        width: 390,
        fontSize: 20,

        '&:hover': {
          backgroundColor: theme.fn.darken('#2D303D', 0.05),
        },
      },   
}));