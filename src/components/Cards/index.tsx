import { Flex, Text, Box } from '@mantine/core';
import React, { useContext } from 'react';
import { useStyles } from './styles';
import upArrow from '../../assets/arrow-circle-up.png';
import upDown from '../../assets/arrow-circle-down.png';
import moneyIcon from '../../assets/moneyIcon.png';
import { context } from '../../context';

export default function Cards() {
	const { classes } = useStyles();
	const {totalCashIn, totalCashOut, totalCash} = useContext(context);
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
                    R$ {totalCashIn.toFixed(2)}
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
                    R$ {totalCashOut.toFixed(2)}
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
                    R$ {totalCash.toFixed(2)}
				</Text>
			</Box>
		</Flex>
	);
}
