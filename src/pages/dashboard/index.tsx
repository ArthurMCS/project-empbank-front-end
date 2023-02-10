import React from 'react'
import DashboardHeader from '../../components/Header'
import { useStyles } from './styles'

export default function Dashboard() {
    const { classes } = useStyles()  
    return (
        <div className={classes.container}>
            <DashboardHeader />
        </div>
    )
}
