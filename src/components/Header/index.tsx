import React from 'react';
import { Button, Flex, Header, Paper, Text } from '@mantine/core';
import { useStyles } from './styles';
import logo from '../../assets/logoHorizontal.png';
import Cards from '../Cards';


export default function DashboardHeader() {
  const { classes } = useStyles()  
  return (
    <Header
        height={{ md: 200 }} 
        p="md"
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
        </div>
    </Header>
  )
}
