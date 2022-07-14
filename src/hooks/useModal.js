import { useState, useEffect } from 'react'

export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        if(isOpen){
            document.getElementById('modal')?.classList.add("--active")
        }else{
            document.getElementById('modal')?.classList.remove("--active")
        }
        

    }, [isOpen])

    return {
        toggleModal
    }
}
