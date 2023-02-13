import React, { useContext } from 'react'
import { Table } from '@mantine/core'
import { useStyles } from './styles';
import { context } from '../../context';

export default function TransactionsTable() {
    const {transactions} = useContext(context);

    const rows = transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td>{transaction.title}</td>
          <td>{transaction.value}</td>
          <td>{transaction.category}</td>
          <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.created_at))}</td>
        </tr>
    ));  

    return (
        <Table
            mt="25px"
            horizontalSpacing="xl" 
            verticalSpacing="lg" 
            fontSize="xs"
        >
           <tbody>
                {rows}
           </tbody>
        </Table>
    )
}
