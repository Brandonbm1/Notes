import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../context/AppContext"
import Form from "../components/Form"
import { modifyForm } from "../helpers/modifyForm"


const CreateNote = () => {
  const {handleChange, handleSave} = modifyForm()
  return (
    <>
      <Form handleChange={handleChange} />
      <section className='keypad'>

        <Link to='/' className="button keypad-cancel">
          <p><FontAwesomeIcon icon={faXmark} className="icon" />Cancelar</p>
        </Link>
        <div type='button'>
          <Link
            to='/'
            id="save-button"
            className="button keypad-save"
            onClick={handleSave}
          >
            <p><FontAwesomeIcon icon={faFloppyDisk} className="icon" />Guardar</p>
          </Link>
        </div>
      </section>
    </>
  )
}

export default CreateNote   