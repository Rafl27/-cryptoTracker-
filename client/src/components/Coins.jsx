import './Coins.css'
import { formatCurrency } from '../utilities/formatCurrency'
import { Button } from 'react-bootstrap'
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

export const Coins = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleOpenModal = () => {
        setModalIsOpen(true)
    }

    const handleCloseModal = () => {
        setModalIsOpen(false)
    }

    const customStyles = {
        content: {
            top: "50%",
            left: '50%',
            right: "auto",
            bottom: "auto",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',

        }
    }

    return (
        <div className='card'>
            <img className='coinImg' src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <p>{formatCurrency(props.price)}</p>
            <Button onClick={handleOpenModal} >Info</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <div className='modal-card'>
                    <img className='modal-img' src={props.image} />
                    <div className='name-price'>
                        <p className='name-modal'>Name: {props.name}</p>
                        <p>Price: {formatCurrency(props.price)}</p>
                        <div className='extra-info'>
                            
                            <p>Current Rank: {props.rank}</p>
                            <p>Day High: {formatCurrency(props.high)}</p>
                            <p>Day Low: {formatCurrency(props.low)}</p>
                            <p>Last updated: {props.lastUpdated}</p>
                        </div>
                    </div>
                    <button onClick={handleCloseModal}>Close Info</button>
                </div>


            </Modal>
        </div>
    )
}