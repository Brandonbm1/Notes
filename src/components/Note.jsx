import React from 'react'
import { getNote } from '../helpers/getNote'
import { useModal } from '../hooks/useModal'

const Note = ({ note, exportNote }) => {
    const { toggleModal } = useModal()
    return (
        <>
            <div className="note-container__note" onClick={() => {
                toggleModal()
                exportNote(note)
            }}>
                <strong className='note-container__note-title'>{note.title}</strong>
                <p className='note-container__note-comment'>{note.comment}</p>
            </div>
        </>
    )
}

export default Note