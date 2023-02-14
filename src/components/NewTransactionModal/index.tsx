import { Box, Button, Flex, Image, Modal, NumberInput, Select, TextInput } from '@mantine/core'
import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import arrowUp from '../../assets/arrow-circle-up.png'
import arrowDown from '../../assets/arrow-circle-down.png'
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { useStyles } from './styles'
import { useForm } from '@mantine/form'
import axios from 'axios'
import { context } from '../../context'

type NewTransactionModalProps = {
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>
}

type Transaction = {
  id: string,
  title: string,
  value: number,
  category: string,
  cashIn: boolean,
  created_at: string,
}

type NewTransactionFormData = {
  title: string,
  value: string,
  category: string,
}

export default function NewTransactionModal({opened, setOpened}: NewTransactionModalProps) {
  const { classes } = useStyles();
  const [cashIn, setCashIn] = useState(true);
  const { setTransactions } = useContext(context);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const form = useForm({
    initialValues: {
      title: '',
      value: '',
      category: '',
    }
});

  const dataSelect = [
    { value: 'Alimentação', label: 'Alimentação' },
    { value: 'Salário', label: 'Salário' },
    { value: 'Transporte', label: 'Transporte' },
    { value: 'Aluguel', label: 'Aluguel' },
  ];

  const handleForm = async ({ title, value, category }: NewTransactionFormData) => {
    const token = JSON.parse(localStorage.getItem('token') || '');

    setIsSubmiting(true);

    const response = await axios.post('https://project-empbank-api.vercel.app/transactions', {
      title,
      value,
      category,
      cashIn,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    });

    setTransactions((transactions) => [...transactions, response.data as unknown as Transaction])

    form.reset();

    setIsSubmiting(false)
  }

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Nova transação"
      size="lg"
      className={classes.container}
    >
      <Box 
        mx="auto"
        sx={{ maxWidth: 438 }}
      >
        <form
           onSubmit={form.onSubmit((values) => handleForm(values))}
        >
            <TextInput
              placeholder="Insira o título da transação"
              label="Título"
              radius="md"
              size="lg"
              {...form.getInputProps('title')}
            />
            <NumberInput
              placeholder="Insira o valor da transação"
              label="Valor"
              radius="md"
              size="lg"
              {...form.getInputProps('value')}
              mt="lg"
              precision={2}
            />
            <Select
              transition="pop-top-left"
              transitionDuration={80}
              transitionTimingFunction="ease"
              data={dataSelect}
              label="Categoria"
              placeholder="Selecione uma categoria"
              size="lg"
              {...form.getInputProps('category')}
              mt="lg"
            />
            <Flex
              justify="center"
              align="center"
              gap={8}
              mt="xl"
            >
                <Button 
                  variant="outline" 
                  leftIcon={<BsArrowUpCircle />} 
                  color={cashIn ? 'green' : 'gray'}
                  size="md"
                  className={classes.button}
                  onClick={() => setCashIn(true)}
                >
                  Entrada
                </Button>
                <Button 
                  variant="outline" 
                  leftIcon={<BsArrowDownCircle />} 
                  color={cashIn ? 'gray' : 'red'}
                  size="md"
                  className={classes.button}
                  onClick={() => setCashIn(false)}
                >
                  Saída
                </Button>
            </Flex>
            <Button
              size="lg"
              w="100%"
              mt="lg"
              className={classes.mainButton}
              type="submit"
              disabled={isSubmiting}
            >
                Adicionar
            </Button>
        </form>
    </Box>
  </Modal>
  )
}