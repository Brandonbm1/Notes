import { createContext, useState } from 'react'
import ArrayNotes from '../helpers/ArrayNotes'
export const AppContext = createContext("")

export const AppContextProvider = ({ children }) => {
    const [notes, setNotes] = useState(ArrayNotes)
    const editNote = (noteId, newNote)=>{
        const noteEdit = notes.find((note) => {
            if(note.id === noteId){
                note = {...note, newNote}
                return note
            }
        })
    }
    return (
        <AppContext.Provider value={{
            notes,
            setNotes,
            editNote
        }} >
            {children}
        </AppContext.Provider>
    )
}
