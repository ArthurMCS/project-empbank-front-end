import MainForm from "../../components/Form";
import HeroImg from '../../assets/image5.png'
import { useStyles } from "./style";


export function Home() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <img src={HeroImg}  alt="casal olhando para um tablet" className={classes.img}/>
      <MainForm />
    </div>
  );
}
