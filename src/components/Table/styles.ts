import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
    container: {
        height: 409,
        overflowY: 'auto',
        '&::-webkit-scrollbar': { 
            display: 'none',
        },
        marginTop: 20,
    },
    table: {
        marginTop: 10,
        width: '100%',
        borderSpacing: '0 0.5rem',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    tr: {
        border: '1px solid #CED4DA',
        borderRadius: 5,
        height: 56,
        padding: '20px, 18px, 20px, 18px',
        display: 'flex',
        alignItems: 'center',
    },
    td: {
        textAlign: 'center',
        width: '100%',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    circle: {
        borderRadius: '100%',
        height: 15,
        width: 15,
        margin: '0px 25px 0px 15px',
    }
}));