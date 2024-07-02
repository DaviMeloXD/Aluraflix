import styles from './Card.module.css'

import Button from "components/Button";


function Card({ card, onEditClick, onDeleteClick }) {
    const { id, linguagem, linkVideo } = card;

    const handleEdit = () => {
        onEditClick(card);
    };

    const handleDelete = () => {
        onDeleteClick(id);
    };
    const getCardClass  = (linguagem) => {
        switch (linguagem) {
            case 'FRONT-END':
                return styles.cardFrontEnd;
            case 'BACK-END':
                return styles.cardBackEnd;
            case 'MOBILE':
                return styles.cardMobile;
            default:
                return '';
        }
    };

    return (
        <div className={`${styles.card} ${getCardClass(linguagem)}`}>
            <h3>{linguagem}</h3>
            <iframe src={linkVideo} title={linguagem} frameBorder="0" allowFullScreen></iframe>
            <div className={styles.buttonContainer}>
                <Button type="edit" onClick={handleEdit} />
                <Button type="delete" onClick={handleDelete} />
            </div>
        </div>
    );
}
export default Card;
