import {useEffect, useState} from 'react'

export const getNote = () => {
    const [renderNote, setRenderNote] = useState({})
    useEffect(()=>{
        console.log(renderNote)
    }, [renderNote])
    return {
        renderNote,
        setRenderNote
    }
}
