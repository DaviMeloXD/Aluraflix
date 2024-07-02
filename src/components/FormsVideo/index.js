import React, { useState } from 'react';
import styles from './FormsVideo.module.css';

function FormsVideo({ onAddVideo }) {
    const [linguagem, setLinguagem] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [titulo, setTitulo] = useState('');

    const handleAddVideo = () => {
        if (linguagem && linkVideo && titulo) {
            const newVideo = { id: titulo, linguagem, linkVideo };
            onAddVideo(newVideo);
            setLinguagem('');
            setLinkVideo('');
            setTitulo('');
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1>NOVO VIDEO</h1>
            <p>Complete o formulário para criar um novo card de vídeo.</p>
            <div className={styles.formGroup}>
                <label htmlFor="titulo">Título</label>
                <input
                    type="text"
                    id="titulo"
                    placeholder="Insira o titulo do video"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="linguagem">Categoria</label>
                <select
                    id="linguagem"
                    value={linguagem}
                    onChange={(e) => setLinguagem(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
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
                    placeholder="Insira o link do vídeo"
                    value={linkVideo}
                    onChange={(e) => setLinkVideo(e.target.value)}
                />
            </div>
            <button type="button" onClick={handleAddVideo}>GUARDAR</button>
        </div>
    );
}

export default FormsVideo;