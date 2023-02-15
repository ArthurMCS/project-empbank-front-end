import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type ContextProviderProps = {
    children: ReactNode
}

type Transaction = {
    id: string,
    title: string,
    value: number,
    category: string,
    cashIn: boolean,
    created_at: string,
}

type ContextData = {
    fetchTransactions: () => void,
    transactions: Transaction[],
    setTransactions: React.Dispatch<SetStateAction<Transaction[]>>,
    totalCashIn: number,
    totalCashOut: number,
    totalCash: number,
    totalPages: number,
    setTotalPages: React.Dispatch<SetStateAction<number>>,
    isLoading: boolean,
    page: number,
    setPage: React.Dispatch<SetStateAction<number>>,
    search: string,
    setSearch: React.Dispatch<SetStateAction<string>>,
    transactionsFiltered: Transaction[],
}


export const context = createContext<ContextData>({} as ContextData);

export default function ContextProvider({ children }: ContextProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [transactionsFiltered, setTransactionsFiltered] = useState<Transaction[]>([]);
	const [totalCashIn, setTotalCashIn] = useState(0);
	const [totalCashOut, setTotalCashOut] = useState(0);
	const [totalCash, setTotalCash] = useState(0);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');

	const navigate = useNavigate();

	function fetchTransactions(){
		setIsLoading(true);
		const skip = Math.abs(10 - (10 * page));
		const token = JSON.parse(localStorage.getItem('token') || '{}');
		axios.get(`https://project-empbank-api.vercel.app/transactions?skip=${skip}&search=${search}`, {
			headers: {
				'authorization': token
			}
		})
			.then(response => {
				if(response.status === 401){
					return navigate('/login');
				}
				setTransactionsFiltered(response.data.transactionsFiltered);
				setTransactions(response.data.transactions);
				setTotalPages(response.data.totalPage);
				setIsLoading(false);
				return;
			}).catch(error => {
				console.error(error);
				navigate('/login');
			});       
	}

	function fetchValues(){
		const token = JSON.parse(localStorage.getItem('token') || '{}');
		axios.get('https://project-empbank-api.vercel.app/values', {
			headers: {
				'authorization': token
			}
		})
			.then(response => {
				if(response.status === 401){
					return navigate('/login');
				}
				setTotalCashIn(response.data.totalCashIn);
				setTotalCashOut(response.data.totalCashOut);
				setTotalCash(response.data.totalCash);
				setIsLoading(false);
				return;
			}).catch(error => {
				console.error(error);
				navigate('/login');
			});
	}

	useEffect(() => {
		fetchTransactions();
	}, [page, search]);

	useEffect(() => {
		fetchValues();
	}, [transactions]);
  

	return (
		<context.Provider value={{
			fetchTransactions,
			transactions, 
			setTransactions, 
			totalCashIn, 
			totalCashOut, 
			totalCash,
			totalPages,
			setTotalPages,
			isLoading,
			page, 
			setPage,
			setSearch,
			search,
			transactionsFiltered,
		}}>
			{children}
		</context.Provider>
	);
}
