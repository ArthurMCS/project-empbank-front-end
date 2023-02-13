import React from 'react'
import { Table } from '@mantine/core'
import { useStyles } from './styles';

const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

export default function TransactionsTable() {
    const { classes } = useStyles();


    const rows = elements.map((element) => (
        <tr key={element.name}>
          <td>{element.name}</td>
          <td>{element.position}</td>
          <td>{element.symbol}</td>
          <td>{element.mass}</td>
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
