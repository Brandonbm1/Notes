import React, { useState, useContext, useEffect } from 'react'
import Note from '../components/Note'
import { AppContext } from '../context/AppContext'
import Modal from '../components/Modal'
import { getNote } from '../helpers/getNote'


const NotesContainer = () => {
    const { notes, setNotes } = useContext(AppContext)
    // const { setRenderNote } = getNote()
    const [note, setNote] = useState({})
    const exportNote = (event) => {
        setNote(event)
    }
    useEffect(() => {
        notes.map((n) => {
            return n.id === note.id ? n = note : n
        })
    }, [])
    return (
        <>
            <section className="note-container">
                {notes.map(note => {
                    return (
                        <Note key={note.id} note={note} exportNote={exportNote} />
                    )
                })}
            </section>
            <Modal id="modal" note={note} />
        </>
    )
}

export default NotesContainer