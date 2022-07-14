import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useModal } from '../hooks/useModal'
import { AppContext } from '../context/AppContext'
import { modifyForm } from '../helpers/modifyForm'

const Modal = ({note}) => {
    const { toggleModal } = useModal()
    const { editNote } = useContext(AppContext)
    const { handleEdit, handleChange } = modifyForm()
    const resetForm = () =>{
        console.log(document.getElementById('modal_title')?.value)
        // document.getElementById('modal_comment').value 
    }

    return (
        <section className="edit__note-modal" id="modal">
            <div className="edit__note-modal--container">
                <div className='form'>
                    <form className="form__container">
                        <div className="form__title">
                            <label htmlFor="title" className='form__title-label'>Titulo</label>
                            <input
                                type="text"
                                id="modal_title"
                                className='form__title-text'
                                placeholder='Title'
                                name="title"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form__comment">
                            <label htmlFor="comment" className='form__comment-label'>Comentario</label>
                            <textarea
                                id="modal_comment"
                                name="comment"
                                className='form__comment-text'
                                placeholder='Write a comment for this note.'
                                onChange={handleChange}
                            />
                        </div>

                    </form>
                </div>
                <section className='keypad'>

                    <div
                        className='button keypad-cancel'
                        onClick={() => toggleModal()}
                    >
                        <p><FontAwesomeIcon icon={faXmark} className='icon' />Cancel</p>
                    </div>

                    <div
                        className='button keypad-save'
                        onClick={() => {
                            handleEdit(note)
                            toggleModal()
                            resetForm()
                        }}
                    >
                        <p><FontAwesomeIcon icon={faPenToSquare} className='icon' />Edit</p>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default Modal
