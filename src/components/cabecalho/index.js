import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './Logo.png';
import CabecalhoLink from 'components/Cabecalholink';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt='Logo do AluraFlix' />
            </Link>
            <nav>
                <CabecalhoLink url="./" >HOME</CabecalhoLink>
                <CabecalhoLink url="./NovoVideo" >NOVO VIDEO</CabecalhoLink>
            </nav>


        </header>
    )
}

export default Cabecalho;