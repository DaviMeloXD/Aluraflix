import React, { useState } from 'react';
import Banner from 'components/Banner';
import Cards from 'components/Cards';
import EditModal from 'components/EditModal';
import Modal from 'react-modal';
import styles from './Inicio.module.css';

Modal.setAppElement('#root'); 

function Inicio({ videos }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);

    const handleEditClick = (card) => {
        setCurrentCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentCard(null);
    };

    const handleSaveChanges = (updatedCard) => {

        console.log('Card atualizado', updatedCard);
        handleCloseModal();
    };

    return (
        <>
            <Banner />
            <Cards onEditClick={handleEditClick} videos={videos} />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Editar Card"
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <EditModal
                    card={currentCard}
                    onSave={handleSaveChanges}
                    onCancel={handleCloseModal}
                />
            </Modal>
        </>
    );
}

export default Inicio;