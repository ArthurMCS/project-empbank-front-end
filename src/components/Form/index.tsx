import { Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { useStyles } from "./style";
import logo from '../../assets/logoHorizontal.png'

export default function MainForm() {
    const { classes } = useStyles()
    return (
        <form  className={classes.form}>
            <img src={logo} alt="Logo Empbank"/>
            <h1 className={classes.title}>
                Faça seu cadastro
            </h1>
            <Stack>
                <TextInput
                    placeholder="Insira seu nome completo"
                    label="Nome completo"
                    radius="md"
                    size="lg"
                />
                <TextInput
                    placeholder="Insira seu email"
                    label="Email"
                    radius="md"
                    size="lg"
                />
                <PasswordInput
                    placeholder="Insira sua senha"
                    label="Senha"
                    radius="md"
                    size="lg"
                />
                <Button className={classes.registerButton}>
                    FAZER CADASTRO
                </Button>
                <Button className={classes.loginButton}>
                    JÁ TENHO  UMA CONTA
                </Button>
            </Stack>
        </form>
    )
}
