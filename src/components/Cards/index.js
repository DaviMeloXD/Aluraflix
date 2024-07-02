import React, { useState, useEffect } from 'react';
import Card from 'components/Card';
import styles from './Cards.module.css';


function Cards({ onEditClick, videos }) {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(videos);
    }, [videos]);

    const handleDelete = (id) => {
        const updatedCards = cards.filter(card => card.id !== id);
        setCards(updatedCards);
    };

    const linguagens = [...new Set(videos.map(item => item.linguagem))]; 
    
    const getSectionClass = (linguagem) => {
        switch (linguagem) {
            case 'FRONT-END':
                return styles.cardsSectionFrontEnd;
            case 'BACK-END':
                return styles.cardsSectionBackEnd;
            case 'MOBILE':
                return styles.cardsSectionMobile;
            default:
                return '';
        }
    };

    return (
        <div>
            {linguagens.map((linguagem) => (
                <section key={linguagem} className={getSectionClass(linguagem)}>
                    <h1>{linguagem}</h1>
                    <div className={styles.cardsDiv}>
                        {cards
                            .filter(item => item.linguagem === linguagem)
                            .map(item => (
                                <Card key={item.id} card={item} onEditClick={onEditClick} onDeleteClick={handleDelete}/>
                            ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Cards;