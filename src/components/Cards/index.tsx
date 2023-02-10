import { Flex, Text, Box } from '@mantine/core';
import React from 'react';
import { useStyles } from './styles';
import upArrow from '../../assets/arrow-circle-up.png';
import upDown from '../../assets/arrow-circle-down.png';
import moneyIcon from '../../assets/moneyIcon.png';

export default function Cards() {
    const { classes } = useStyles()
  return (
    <Flex
        h={200}
        gap="md"
        justify="center"
        align="center"
        direction="row"
    >
        <Box 
            className={classes.card}
        >
            <Flex
                align="center"
                justify="space-between"
            >
                <Text>
                    Entradas
                </Text>
                <img src={upArrow} />
            </Flex>
            <Text
                weight={700}
                fz={32}
            >
                R$ 10.0000,00
            </Text>
        </Box>
        <Box
            className={classes.card}
        >
            <Flex
                align="center"
                justify="space-between"
            >
                <Text>
                    Saídas
                </Text>
                <img src={upDown} />
            </Flex>
            <Text
                weight={700}
                fz={32}
            >
                R$ 4.0000,00
            </Text>
        </Box>
        <Box
            className={classes.card}
            bg="#2D303D"
        >   
            <Flex
                align="center"
                justify="space-between"
            >
                <Text
                    color="white"
                >
                    Total
                </Text>
                <img src={moneyIcon} />
            </Flex>  
            <Text
                weight={700}
                fz={32}
                color="#FFF"
            >
                R$ 6.0000,00
            </Text>
        </Box>
    </Flex>
  )
}
