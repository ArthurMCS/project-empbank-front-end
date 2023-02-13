import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    container: {
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "33.6px"
    },
    form: {
       display: "flex",
       flexDirection: "column",
       gap: 16,
    },
    input: {
        width: 439,
        height: 36,
    },
    button: {
        width: 211.5,
        height: 58,
        fontSize: 16,
    },
    mainButton: {
        backgroundColor: '#60CFFA',
        height: 64,
        padding: '17px, 32px, 17px, 32px',
        width: 390,
        fontSize: 20,

        '&:hover': {
          backgroundColor: theme.fn.darken('#60CFFA', 0.05),
        }
    }
}));