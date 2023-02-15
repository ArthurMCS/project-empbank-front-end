import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, TextInput } from '@mantine/core';
import { useStyles } from './styles';
import logo from '../../assets/logoHorizontal.png';
import Cards from '../../components/Cards';
import { FiSearch } from 'react-icons/fi';
import { useForm } from '@mantine/form';
import TransactionsTable from '../../components/Table';
import NewTransactionModal from '../../components/NewTransactionModal';
import { context } from '../../context';


type inputDataForm = {
    search: string,
}


export default function Dashboard() {
	const { classes } = useStyles();
	const { 
		fetchTransactions,
		setSearch,
	} = useContext(context);
	const [opened, setOpened] = useState(false);


	const form = useForm({
		initialValues: {
			search: '',
		}
	});


	useEffect(() => {
		if(form.values.search.length === 0){
			setSearch('');
			fetchTransactions();
		}
	}, [form.values.search]);


	useEffect(() => {
		fetchTransactions();
	}, []);


	const handleSubmit = ({ search }: inputDataForm) => {
		setSearch(search.trim());
	};

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
						disabled={form.values.search.trim().length === 0}
					>
                    Buscar
					</Button>
				</form>
				<TransactionsTable  />
			</div>
		</Box>
	);
}

