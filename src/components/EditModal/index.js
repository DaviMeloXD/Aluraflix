import React, { useState, useEffect } from 'react';
import styles from './EditModal.module.css';

function EditModal({ card, onSave, onCancel }) {
    const [linguagem, setLinguagem] = useState('');
    const [linkVideo, setLinkVideo] = useState('');

    useEffect(() => {
        if (card) {
            setLinguagem(card.linguagem);
            setLinkVideo(card.linkVideo);
        } else {
            setLinguagem('');
            setLinkVideo('');
        }
    }, [card]);

    const handleSave = () => {
        const updatedCard = { ...card, linguagem, linkVideo };
        onSave(updatedCard);
    };

    const handleClear = () => {
        setLinguagem('');
        setLinkVideo('');
    };

    return (
        <div className={styles.modalContent}>
            <h2>EDITAR CARD</h2>
            {card ? (
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="linguagem">Categoria</label>
                        <select
                            id="linguagem"
                            value={linguagem}
                            onChange={(e) => setLinguagem(e.target.value)}
                        >
                            <option value="FRONT-END">FRONT-END</option>
                            <option value="BACK-END">BACK-END</option>
                            <option value="MOBILE">MOBILE</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="linkVideo">Link do Vídeo</label>
                        <input
                            type="text"
                            id="linkVideo"
                            value={linkVideo}
                            onChange={(e) => setLinkVideo(e.target.value)}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="button" onClick={handleSave}>Guardar</button>
                        <button type="button" onClick={handleClear}>Limpar</button>
                    </div>
                    <button type="button" onClick={onCancel} className={styles.cancelButton}>Cancelar</button>
                </form>
            ) : (
                <p>Nenhum card selecionado para editar.</p>
            )}
        </div>
    );
}

export default EditModal;
