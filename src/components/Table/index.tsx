import React, { useContext, useState } from 'react'
import { Center, Loader, Pagination } from '@mantine/core'
import { useStyles } from './styles';
import { context } from '../../context';


export default function TransactionsTable() {
    const { 
        transactions, 
        totalPages,
        isLoading,
        page, 
        setPage,
        search,
        transactionsFiltered,
        setTotalPages
     } = useContext(context);
    const { classes } = useStyles();
    
    let transactionsToggle = search.length > 0 ? transactionsFiltered : transactions
    

    const rows = transactionsToggle.map((transaction) => (
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
        <>
        {
            isLoading 
            ? (
                <Center mt={200}>
                    <Loader />
                </Center>
            )
            : (
                <>
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
                    <Center mt={50}>
                        <Pagination 
                            page={page} 
                            onChange={setPage} 
                            total={
                                transactionsToggle === transactionsFiltered 
                                ? Math.ceil(transactionsFiltered.length / 10) 
                                : totalPages
                            }
                        />
                    </Center>
                </>
            ) 
        }
        </>
    )
}
