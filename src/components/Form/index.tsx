import { Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { useStyles } from "./style";

export default function MainForm() {
    const { classes } = useStyles()
    return (
        <form  className={classes.form}>
            <Text size="xl" weight={700}>
                Faça seu cadastro
            </Text>
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
                <Button>FAZER CADASTRO</Button>
                <Button>JÁ TENHO CONTA</Button>
            </Stack>
        </form>
    )
}
