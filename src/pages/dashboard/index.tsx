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
import { useNavigate } from 'react-router-dom';

type inputDataForm = {
    search: string,
}



export default function Dashboard() {
  const { classes } = useStyles();
  const { setTransactions, transactions } = useContext(context);
  const [opened, setOpened] = useState(false);

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
       search: '',
    }
  })

  function fetchTransactions(){
    try {
        const token = JSON.parse(localStorage.getItem('token') || '')
        axios.get('https://project-empbank-api.vercel.app/transactions', {
                headers: {
                    'authorization': token
                }
        })
        .then(response => {  setTransactions(response.data.transactions) });
    } catch (error) {
        console.error(error)
        navigate('/login')  
    }
  }

  useEffect(() => {
    if(form.values.search.length === 0){
        fetchTransactions()
    }
  }, [form.values.search])


  useEffect(() => {
    fetchTransactions()
  }, [])


  const handleSubmit = ({ search }: inputDataForm) => {
    const lowercaseSearch = search.toLowerCase();
    const transactionsFiltered = transactions
    .filter(transaction => (
        transaction.title.toLowerCase().includes(lowercaseSearch) 
        || transaction.category.toLowerCase().includes(lowercaseSearch)
    ));
    setTransactions(transactionsFiltered)
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

