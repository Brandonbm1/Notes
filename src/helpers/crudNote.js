
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const editNote = (note) => {

    const {notes} = useContext(AppContext)
    const newTitle = document.getElementById('title').value
    const newComment = document.getElementById('comment').value
    const newNote = {
        title: newTitle,
        comment: newComment
    }
    editNote(note.id, newNote)
}

