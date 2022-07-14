import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'

const isEmpty = (string) => {
    return string == "" ? true : false
}
const initialForm = {
    title: "",
    comment: ""
}


export const modifyForm = () => {

    const [form, setForm] = useState(initialForm)
    const [title, settitle] = useState(initialForm.title)
    const [comment, setComment] = useState(initialForm.comment)
    const { notes, setNotes } = useContext(AppContext)
    const handleSave = () => {
        const title = document.getElementById('title').value
        const comment = document.getElementById('comment').value
        if (!isEmpty(title) && !isEmpty(comment)) {
            const id = notes.length + 1
            const newNote = {
                id: id,
                title: title,
                comment: comment
            }
            notes.push(newNote)
        }

    }
    const handleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        name === "title" ? settitle(value) : setComment(value)
    }

    const handleEdit = (oldNote) => {
        const newTitle = document.getElementById('title').value
        const newComment = document.getElementById('comment').value
        notes.find((note) => {
            if (note.id === oldNote?.id) {
                note.title = newTitle
                note.comment = newComment
            }
        })
        console.log(oldNote)

    }

    useEffect(() => {
        setForm({
            title: title,
            comment: comment
        })
        if (isEmpty(form.title) || isEmpty(form.comment)) {
            document.getElementById("save-button")?.classList.add('disabled')
        } else {
            document.getElementById("save-button")?.classList.remove('disabled')

        }

    }, [title, comment])
    return {
        handleChange,
        handleSave,
        handleEdit
    }
}
