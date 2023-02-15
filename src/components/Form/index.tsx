import { Button, LoadingOverlay, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useStyles } from './style';
import logo from '../../assets/logoHorizontal.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import axios from 'axios';
import React, { useState } from 'react';

interface LoginFormData {
    email: string,
    password: string,
}

interface RegisterFormData extends LoginFormData {
    username: string,
}


export default function MainForm() {
	const { classes } = useStyles();
	const { pathname } = useLocation();
	const [visible, setVisible] = useState(false);

	const navigate = useNavigate();

	const handleNavigate = () => {
		if(pathname === '/login'){
			return navigate('/');
		}
		return navigate('/login');
	};

	const form = useForm({
		initialValues: {
			email: '',
			username: '',
			password: '',
		},
    
		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
			username: (value) => {
				if(pathname === '/login'){
					return null;
				}
				return value.length > 2 ? null : 'Nome inválido';
			},
			password: (value) => (
				(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*').test(value) && value.length > 8)  
					? null 
					: 'No mínimo 8 caracteres e um caracter especial'),
		},
	});

	const handleRegister = async ({email, password}: RegisterFormData) => {
		setVisible(true);

		try {
            
			const response = await axios.post('https://project-empbank-api.vercel.app/register', {
				email,
				password
			});

			setVisible(false);

			if(response.status === 201) {
				navigate('/login');
			}

		} catch (error) {
			setVisible(false);
			console.error(error);
		}

	};

	const handleLogin = async ({email, password}: LoginFormData) => {
		setVisible(true);

		try {
            
			const response = await axios.post('https://project-empbank-api.vercel.app/login', {
				email,
				password
			});

			setVisible(false);

			if(response.status === 201) {
				localStorage.setItem('token', JSON.stringify(response.data.token));
				navigate('/dashboard');
			}

		} catch (error) {
			setVisible(false);
			console.error(error);
		}
	};


	return (
		<form  
			className={classes.form} 
			onSubmit={form.onSubmit((values) => 
				pathname === '/login' ? handleLogin(values) : handleRegister(values)
			)}
		>
			<LoadingOverlay visible={visible} overlayBlur={2} />
			<img src={logo} alt="Logo Empbank"/>
			<h1 className={classes.title}>
				{pathname === '/' ? 'Faça seu cadastro' : 'Faça seu login'}
			</h1>
			<Stack>
				{
					pathname !== '/login' && (
						<TextInput
							placeholder="Insira seu nome completo"
							label="Nome completo"
							radius="md"
							size="lg"
							{...form.getInputProps('username')}
						/>
					)
				}
				<TextInput
					placeholder="Insira seu email"
					label="Email"
					radius="md"
					size="lg"
					{...form.getInputProps('email')}
				/>
				<PasswordInput
					placeholder="Insira sua senha"
					label="Senha"
					radius="md"
					size="lg"
					{...form.getInputProps('password')}
				/>
				<Button className={classes.registerButton} type="submit">
					{pathname === '/login' ? 'FAZER LOGIN' : 'FAZER CADASTRO'}
				</Button>
				<Button 
					className={classes.loginButton}
					onClick={handleNavigate}
				>
					{pathname === '/login' ? 'CRIAR CONTA' : 'JÁ TENHO UMA CONTA'}
				</Button>
			</Stack>
		</form>
	);
}
