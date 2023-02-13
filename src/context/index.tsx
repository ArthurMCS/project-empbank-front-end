import { createContext, ReactNode, SetStateAction, useState } from 'react';

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
    setTransactions: React.Dispatch<SetStateAction<Transaction[]>>

}

export const context = createContext<ContextData>({} as ContextData);

export default function ContextProvider({ children }: ContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  return (
    <context.Provider value={{ transactions, setTransactions }}>
        {children}
    </context.Provider>
  )
}
