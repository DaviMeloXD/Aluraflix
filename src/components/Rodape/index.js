import styles from './Rodape.module.css';
import logo from '../cabecalho/Logo.png'

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src={logo} alt='Logo AluraFLix' />
        </footer>
    )
}

export default Rodape;