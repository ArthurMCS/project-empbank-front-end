import { createContext, ReactNode, SetStateAction, useMemo, useState } from 'react';

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
    transactions: Transaction[],
    setTransactions: React.Dispatch<SetStateAction<Transaction[]>>,
    totalCashIn: number,
    totalCashOut: number,
    totalCash: number,
}

export const context = createContext<ContextData>({} as ContextData);

export default function ContextProvider({ children }: ContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const totalCashIn = useMemo(() => (
    transactions
    .filter((transaction) => transaction.cashIn)
    .reduce((acc, curr) => acc + curr.value, 0)
  ), [transactions])

  const totalCashOut = useMemo(() => (
    transactions
    .filter((transaction) => !transaction.cashIn)
    .reduce((acc, curr) => acc + curr.value, 0)
  ), [transactions])

  
 const totalCash = useMemo(() =>  totalCashIn - totalCashOut, [transactions])

  return (
    <context.Provider value={{ 
        transactions, 
        setTransactions, 
        totalCashIn, 
        totalCashOut, 
        totalCash 
    }}>
        {children}
    </context.Provider>
  )
}
