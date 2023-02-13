import React, { useEffect } from 'react';
import { Box, Button, Header, TextInput } from '@mantine/core';
import { useStyles } from './styles';
import logo from '../../assets/logoHorizontal.png';
import Cards from '../../components/Cards';
import { FiSearch } from 'react-icons/fi';
import { useForm } from '@mantine/form';
import TransactionsTable from '../../components/Table';
import axios from 'axios';

type inputDataForm = {
    search: string,
}

export default function Dashboard() {
  const { classes } = useStyles();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') || '')
    axios.get('https://project-empbank-api.vercel.app/transactions', {
        headers: {
            'authorization': token
          }
    }).then(response => { console.log(response)} )
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
        <div className={classes.content}>   
            <div className={classes.newTransactionContainer}>
                <img src={logo} alt="Logo Empbank"/>
                <Button 
                    className={classes.newTransactionButton}
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

