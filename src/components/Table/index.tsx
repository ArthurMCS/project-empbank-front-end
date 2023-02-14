import React, { useContext } from 'react'
import { ScrollArea, Table } from '@mantine/core'
import { useStyles } from './styles';
import { context } from '../../context';

export default function TransactionsTable() {
    const {transactions} = useContext(context);
    const { classes } = useStyles()

    const rows = transactions.map((transaction) => (
        <tr key={transaction.id} className={classes.tr}>
          <td className={classes.title}>
            <div className={classes.circle} style={{ backgroundColor: transaction.cashIn ? 'green' : 'red'}}/>
            {transaction.title}
         </td>
          <td className={classes.td} style={{ color: transaction.cashIn ? 'green' : 'red'}}>
            {transaction.cashIn ? `R$ ${transaction.value}` : `-R$ ${transaction.value}`}
         </td>
          <td className={classes.td}>{transaction.category}</td>
          <td className={classes.td}>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.created_at))}</td>
        </tr>
    ));  

    return (
        <div className={classes.container}>
            <table
                className={classes.table}
            >
                <tbody
                    className={classes.body}
                >
                        {rows}
                </tbody>
            </table>     
        </div>
    )
}
