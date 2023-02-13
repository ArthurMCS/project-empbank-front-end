import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, TextInput } from '@mantine/core';
import { useStyles } from './styles';
import logo from '../../assets/logoHorizontal.png';
import Cards from '../../components/Cards';
import { FiSearch } from 'react-icons/fi';
import { useForm } from '@mantine/form';
import TransactionsTable from '../../components/Table';
import axios from 'axios';
import NewTransactionModal from '../../components/NewTransactionModal';
import { context } from '../../context';

type inputDataForm = {
    search: string,
}

type Transaction = {
    titles: string,
    value: number,
    cashIn: boolean,
}


export default function Dashboard() {
  const { classes } = useStyles();
  const { setTransactions, transactions } = useContext(context)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') || '')
    axios.get('https://project-empbank-api.vercel.app/transactions', {
            headers: {
                'authorization': token
            }
    })
    .then(response => {  setTransactions(response.data.transactions) })

  }, [])

  const form = useForm({
    initialValues: {
       search: '',
    }
  })

  const handleSubmit = ({ search }: inputDataForm) => {
    console.log(search);
  }

  return (
    <Box
        p="0 180px"
        className={classes.container}
    >
        <NewTransactionModal opened={opened} setOpened={setOpened} />
        <div className={classes.content}>   
            <div className={classes.newTransactionContainer}>
                <img src={logo} alt="Logo Empbank"/>
                <Button 
                    className={classes.newTransactionButton}
                    onClick={() => setOpened(true)}
                >
                    Nova transação
                </Button>
            </div>
            <Cards />
            <form
                className={classes.form}
                onSubmit={form.onSubmit((values) => handleSubmit(values))}
            >
                <TextInput
                   placeholder="Busque uma transação"
                   size="lg"
                   w="85%"
                   {...form.getInputProps('search')}
                />
                <Button
                    variant="outline"
                    leftIcon={<FiSearch />}
                    size="lg"
                    type="submit"
                    disabled={form.values.search.length === 0}
                >
                    Buscar
                </Button>
            </form>
            <TransactionsTable />
        </div>
    </Box>
  )
}

