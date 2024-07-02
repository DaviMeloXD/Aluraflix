import styles from './Button.module.css';

function Button({ type, onClick }) {
    return (
        <button className={styles[type]} onClick={onClick}>
            {type === 'edit' ? 'Editar' : 'Deletar'}
        </button>
    );
}

export default Button;