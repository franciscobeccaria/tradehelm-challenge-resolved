import React from 'react'

const Modal = ({children, onClose}) => {
    return (
        <section className='modal'>
            <b className='modal__background' onClick={onClose}></b>
            <article className='modal__content'>
                {children}
            </article>
        </section>
    )
}

export default Modal
