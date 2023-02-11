import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 50,
    },
    content: {
        width: '70%',
    },
    newTransactionContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    newTransactionButton: {
        backgroundColor: '#60CFFA',
        borderRadius: 6,
        height: 46,
        gap: 10,
        padding: '17px, 32px, 17px, 32px',
        width: 152,
        fontSize: 15,
        lineHeight: 26,
        boxShadow: '0 3px 5px -0.5px gray',

        '&:hover': {
          backgroundColor: theme.fn.darken('#60CFFA', 0.05),
        }
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}));